ABS 01: Este método tem a função de retornar o valor absoluto de um número, isto significa que o retorno será sempre positivo.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.abs (-1234);
    alert (valor1);
  </script>
</body>
</html>

ACOS 02: Este método retornará o arco cosseno (em radianos) de um número.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.acos (0.14);
    alert (valor1);
  </script>
</body>
</html>

CEIL 03: Este método retorna um inteiro maior ou igual a um número.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.ceil (14.6);
    alert (valor1);
  </script>
</body>
</html>

CEil 04: Veja que utilizamos o mesmo número do exemplo anterior, só que agora em modo negativo. O arredondamento será para -14.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.ceil (-14.6);
    alert (valor1);
  </script>
</body>
</html>

COS 05: Este método retornará o cosseno (em radianos) de um número.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.cos (0.14);
    alert (valor1);
  </script>
</body>
</html>

EXP 06: Este método retornará o valor da constante de Euler elevada ao número informado, ou seja, E elevado ao parâmetro.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.exp (0.0007);
    alert (valor1);
  </script>
</body>
</html>

FLOOR 07: Este método retorna o maior inteiro menor ou igual a um número.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.floor (100.25);
    var valor2 = Math.floor (-100.25);
    alert (valor1);
    alert (valor2);
  </script>
</body>
</html>

LOG 08: Este método retorna o logaritmo natural de um número (base E). 
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.log (2.2);
    alert (valor1);
  </script>
</body>
</html>

MAX 09: Este método retorna o maior valor entre dois números.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.max ( 3,9);
    alert (valor1);
  </script>
</body>
</html>

MIN 10: Este método retorna o menor valor entre dois números.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.min ( 3,9);
    alert (valor1);
  </script>
</body>
</html>

POW (base, expoente) 11: Este método retorna a base elevada à potência do expoente. Por exemplo, 2 elevado a décima potência é 1024.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.pow ( 1024,2);
    alert (valor1);
  </script>
</body>
</html>

RANDOM 12: Este método retorna um número aleatório entre 0 e 1 com até 15 dígitos. Este número aleatório é definido através do relógio do computador.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    alert (Math.random ());
  </script>
</body>
</html>

ROUND 13: Com este método é possível arredondar um valor. O arredondamento segue a regra de arredondamento que vimos anteriormente.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.round (121.6);
    alert (valor1);
  </script>
</body>
</html>

SIN 14: Este método retorna o seno de um número.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.sin (1.4);
    alert (valor1);
  </script>
</body>
</html>

SQRT 15: Retorna a raiz quadrada de um número.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.sqrt (9);
    alert (valor1);
  </script>
</body>
</html>

TAN 16: Retorna a tangente de um número, que é equivalente a divisão do seno pelo cosseno deste mesmo valor.
<html>
<head>
<title>...</title>
</head>

<body>
  <script>
    var valor1 = Math.tan (1.5);
    alert (valor1);
  </script>
</body>
</html>
