# [![anigif-jackal.gif](https://i.postimg.cc/tCsz4L7n/anigif-jackal.gif)](https://postimg.cc/SJp9Z16m) CodeBabel-Python

## CodeBabel FrontEnd
___
*Public Repository ( JS REPO )*
___
[![Banner.png](https://i.postimg.cc/d35m7GZq/Banner.png)](https://postimg.cc/q6CCShGY)

### FrontEnd Hilight Syntax Usage

[![HTML5-E34-F26.png](https://i.postimg.cc/tR6dvwZB/HTML5-E34-F26.png)](https://postimg.cc/w36s7WkN)
[![CSS3-1572-B6.png](https://i.postimg.cc/BbfFGZLM/CSS3-1572-B6.png)](https://postimg.cc/5YpyBVmC)
[![Java-Script-323330.png](https://i.postimg.cc/VsXMWtpT/Java-Script-323330.png)](https://postimg.cc/CdLzFRFH)

___

# Implamentação [PTBR]
> Implementação da módulo de marcação de sintaxe PrismJS, módulo completo, para diversas linguagens, fácil de seguir a implementação, sem grandes adaptações, não sendo necessário mudar o arquivo prism.css ou prism.js. O código está simples, bem comentado, só observar o que realmente pertence ao PrismJS, dentro do arquivo cbbl.core.css, há divisores usados para criar um "console" com a etiqueta de cada linguagem, no caso, python e css são os exemplos. São 3 exemplos : *Básico*, *sem salvar* e *completo*.

# Implamentação [EN]
>Implementation of PrismJS syntax markup module, complete module, for several languages, easy to follow implementation, without major adaptations, no need to change prism.css or prism.js file. The code is simple, well commented, just observe what really belongs to PrismJS, inside the cbbl.core.css file, there are dividers used to create a "console" with the label of each language, in this case, python and css are the examples. There are 3 examples: *Basic*, *without saving* and *complete*.

*Tags necessárias para funcionamento mínimo do PrismJS.*

( head )...

```html
<!DOCTYPE html>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="layout/cbbl.core.css">
<link rel="stylesheet" href="layout/prism.css">
<link rel="shortcut icon" href="assets/favicon.png" type="image/x-icon">
<script src="app/prism.js"></script>
<title>CodeBabel ~ Prism</title>
</head>
<body>
<pre name="card1">
 <!--"[PTBR]language-css" mude para "language-html" e teste"-->
<!--"[EN]language-css" change to "language-html" and test"-->
<code  class="language-css">
/*[PTBR]Não indentar, manter ao lado esquerdo, isso duplicará o padding interno...*/
#div-example { color :red; }

/*[EN]Do not indent, keep to the left side, this will duplicate the inner padding...*/
#div-example { color :red; }
</code>
</pre>
<!--EndCard1-->
<!--Card2ExampleJava-->
<pre name="card2">
<code  class="language-java">
import java.util.Scanner;

public class ExemploSoma
{
  public static void main(String[]args)
  {
    //declaração das variáveis
    int numero1, numero2, soma;

    //declaração do objeto Scanner
    Scanner sc = new Scanner(System.in);

    //recebe pelo teclado dois números inteiros
    System.out.print("Entre com o primeiro número inteiro: ");
    numero1 = sc.nextInt();
    System.out.print("Entre com o segundo número inteiro: ");
    numero2 = sc.nextInt();

    soma = numero1 + numero2;
    System.out.printf("A soma de %d e %d resulta em %d\n",numero1, numero2, soma);
  }
}
</code>
</pre>
<!--EndCard2ExampleJava-->
</body>
</html>
```
___

## [  Motivação/Motivation ]
* Observei que as pessoas tem tido dificuldade em implementar o PrismJS nos seus sites e apps, espero que ajude.

* I've noticed that people are having trouble implementing PrismJS on their websites and apps, hope it helps.
___
### Prism Hilight Syntax ( JS Folder ) 
📃 [Prism Hilight Syntax : Easy usage template](https://link-url-here.org)

___

## Powered By PrismJS
⧋ [More information](https://prismjs.com/)

