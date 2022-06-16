/*
 * Envia posições de potenciômetros para a porta serial
 * Formato:
 * <nnnnNNNNnnnnNNNN>
 * (quatro valores de 4 dígitos cercados por < e >)
 */

const int pinLed = LED_BUILTIN;

const int pot1 = A0;
const int pot2 = A1;
const int pot3 = A2;
const int pot4 = A3;

void setup() {
  pinMode(pinLed, OUTPUT);

  Serial.begin(9600);

  // Para saber que é o meu código
  digitalWrite(pinLed, HIGH);
  delay(1000);
  digitalWrite(pinLed, LOW);
  delay(200);  
  digitalWrite(pinLed, HIGH);
  delay(1000);
  digitalWrite(pinLed, LOW);
}

// "void", mas altera o parâmetro saida. confia!
void geraSaida(char saida[], int potenciometro){
    int valorPotenciometro = analogRead(potenciometro);
    // cria uma saída com zeros à esquerda
    sprintf(saida, "%04d", valorPotenciometro);
    //método não retorna nada, mas altera o parâmetro saida
}


void loop() {

    Serial.print("<");
    char valor[4];
    
    geraSaida(valor, pot1);
    Serial.print(valor);
    geraSaida(valor, pot2);
    Serial.print(valor);
    geraSaida(valor, pot3);
    Serial.print(valor);
    geraSaida(valor, pot4);
    Serial.print(valor);

    Serial.println(">");

    delay(10);
    digitalWrite(pinLed, LOW);
}
