const  readline  =  require ( 'readline' )
var  tabuleiro  =  [ ]
const  rl  =  readline . createInterface ( {
    entrada : processo . stdin ,
    saída : processo . saída padrão
} )
const  vez  =  function ( vez ) {
    if ( vez  ===  - 1 ) {
        return  "-"
    }  else  if ( vez  ===  0 ) {
        retornar  "O"
    }  else {
        retornar  "X"
    }
}

var  quemJoga  =  0

var  posicao  =  { "x" : 0 ,  "y" : 0 }

var  joguei  =  false

var  jogarBot  =  null

const  game  =  {
    "novo" : função ( ) {
        console . limpar ( )
        tabuleiro  =  [
                    [ - 1 , - 1 , - 1 ] ,
                    [ - 1 , - 1 , - 1 ] ,
                    [ - 1 , - 1 , - 1 ]
        ]
    } ,
    "tabuleiro" : function ( ) {
        var  aux  =  ""
        console . log ( "Jogue usando números, X e Y" )
        console . log ( "0 1 2" )
        para ( seja  i  =  0 ;  i  <  tabuleiro . comprimento ;  i ++ ) {
            if ( i <= 2 ) {
                aux  + =  ` $ { i } `
            }
            para ( seja  b  =  0 ;  b  <  tabuleiro [ i ] . comprimento ;  b ++ ) {
                if ( b  ===  2 ) {
                    aux  + =  `$ { vez ( parseInt ( tabuleiro [ i ] [ b ] ) ) } \ n`
                }  else {
                    aux  + =  `$ { vez ( parseInt ( tabuleiro [ i ] [ b ] ) ) } `
                }
            }
        }
        return  aux
    } ,
    "botPlay" : function ( ) {
        var  idY  =  matemática . chão ( Math . aleatório ( ) * tabuleiro . comprimento )
        var  idX  =  matemática . floor ( Math . random ( ) * tabuleiro [ idY ] . length )
        while ( tabuleiro [ idY ] [ idX ]  ===  0  ||  tabuleiro [ idY ] [ idX ]  ===  1 ) {
            idY  =  matemática . chão ( Math . aleatório ( ) * tabuleiro . comprimento )
            idX  =  matemática . floor ( Math . random ( ) * tabuleiro [ idY ] . length )
        }
        tabuleiro [ idY ] [ idX ]  =  0
        if ( quemJoga  ==  0 ) {
            quemJoga  =  1
        }  else {
            quemJoga  =  0
        }
    } ,
    "play" : function ( x ,  y ) {
        const  encontrado  =  tabuleiro [ x ] [ y ]
        if ( encontrado  ===  - 1 ) {
        if ( quemJoga  ==  0 ) {
            quemJoga  =  1
        }  else {
            quemJoga  =  0
        }
        if ( jogarBot ! == "y" ) {
            tabuleiro [ x ] [ y ]  =  quemJoga
        }  else {
            tabuleiro [ x ] [ y ]  =  quemJoga
            jogo . botPlay ( )
        }
        }
        joguei  =  false
    } ,
    "verifica" : função ( ) {
        // Verifica O
        if ( tabuleiro [ 0 ] [ 0 ]  ===  0  &&  tabuleiro [ 0 ] [ 1 ]  ===  0  &&  tabuleiro [ 0 ] [ 2 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 1 ] [ 0 ]  ===  0  &&  tabuleiro [ 1 ] [ 1 ]  ===  0  &&  tabuleiro [ 1 ] [ 2 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 2 ] [ 0 ]  ===  0  &&  tabuleiro [ 2 ] [ 1 ]  ===  0  &&  tabuleiro [ 2 ] [ 2 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 0 ]  ===  0  &&  tabuleiro [ 1 ] [ 1 ]  ===  0  &&  tabuleiro [ 2 ] [ 2 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 2 ]  ===  0  &&  tabuleiro [ 1 ] [ 1 ]  ===  0  &&  tabuleiro [ 2 ] [ 0 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 0 ]  ===  0  &&  tabuleiro [ 1 ] [ 0 ]  ===  0  &&  tabuleiro [ 2 ] [ 0 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 1 ]  ===  0  &&  tabuleiro [ 1 ] [ 1 ]  ===  0  &&  tabuleiro [ 2 ] [ 1 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 2 ]  ===  0  &&  tabuleiro [ 1 ] [ 2 ]  ===  0  &&  tabuleiro [ 2 ] [ 2 ]  ===  0 ) {
            retornar  "O ganhou parabéns"
        }
        // Verifica X
        if ( tabuleiro [ 0 ] [ 0 ]  ===  1  &&  tabuleiro [ 0 ] [ 1 ]  ===  1  &&  tabuleiro [ 0 ] [ 2 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 1 ] [ 0 ]  ===  1  &&  tabuleiro [ 1 ] [ 1 ]  ===  1  &&  tabuleiro [ 1 ] [ 2 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 2 ] [ 0 ]  ===  1  &&  tabuleiro [ 2 ] [ 1 ]  ===  1  &&  tabuleiro [ 2 ] [ 2 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 0 ]  ===  1  &&  tabuleiro [ 1 ] [ 1 ]  ===  1  &&  tabuleiro [ 2 ] [ 2 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 2 ]  ===  1  &&  tabuleiro [ 1 ] [ 1 ]  ===  1  &&  tabuleiro [ 2 ] [ 0 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 0 ]  ===  1  &&  tabuleiro [ 1 ] [ 0 ]  ===  1  &&  tabuleiro [ 2 ] [ 0 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 1 ]  ===  1  &&  tabuleiro [ 1 ] [ 1 ]  ===  1  &&  tabuleiro [ 2 ] [ 1 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }  else  if ( tabuleiro [ 0 ] [ 2 ]  ===  1  &&  tabuleiro [ 1 ] [ 2 ]  ===  1  &&  tabuleiro [ 2 ] [ 2 ]  ===  1 ) {
            retornar  "X ganhou parabéns"
        }
    }
}

var  rodou  =  false

// Função
function  questionar ( ) {
    console . log ( jogo . tabuleiro ( ) )
    var  bot  =  null
    if ( jogarBot  ===  null ) {
    bot  =  ( )  =>  {
        retornar  nova  promessa ( ( resolver ,  rejeitar )  =>  {
        rl . question ( 'Deseja jogar com bot? (s ou n)' ,  ( resposta )  =>  {
            jogarBot  =  resposta
            resolver ( )
        } )
        } )
    }
    }
    const  question1  =  ( )  =>  {
        retornar  nova  promessa ( ( resolver ,  rejeitar )  =>  {
        rl . pergunta ( 'Posição X:' ,  ( resposta )  =>  {
            posicao . x  =  resposta
            resolver ( )
        } )
        } )
    }
    const  question2  =  ( )  =>  {
        retornar  nova  promessa ( ( resolver ,  rejeitar )  =>  {
        rl . pergunta ( 'Posição Y:' ,  ( resposta )  =>  {
            posicao . y  =  resposta 
            joguei  =  true
            resolver ( )
        } )
        } )
    }
    const  main  =  async  ( )  =>  {
        if ( ! rodou ) {
        aguardar  bot ( )
        }
        aguarde a  pergunta 1 ( )
        aguarde a  pergunta 2 ( )
        rodou  =  verdadeiro
        if ( joguei ) {
            if ( posicao . x  ===  ""  ||  posicao . x  ===  null ) {
                posicao . x  =  0
            }
            if ( posicao . y  ===  ""  ||  posicao . y  ===  null ) {
                posicao . y  =  0
            }
            jogo . jogar ( posicao . x ,  posicao . y )
            console . limpar ( )
            if ( ! game . verifica ( ) ) {
            questionar ( )
            }  else {
                console . log ( jogo . verifica ( ) )
                console . log ( "Iniciando um novo jogo em 2 segundo" )
                setTimeout ( ( )  =>  {
                    jogo . novo ( )
                    questionar ( )
                } ,  2000 ) ;
            }
        }
    }
    principal ( )
}

//Começar novo jogo
jogo . novo ( )
questionar ( )
