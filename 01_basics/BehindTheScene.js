/*
jb se js file banega ek global execution context banega hi banega <- this
ye this variable ke andar isko run kiya jata hai 
js is single threaded 
[js code] ye two phase me run hota hai  
-> Memory creation phase
->Execution phase 
example :-

int val1 = 10;
int val2 = 5;
  function addNum(num1 , num2){
        let total = num1 + num2;
        return total ;
}
let result1 = addNum(val1 , val2);
let result2 = addNum(10, 2);

now step 1 sbse phle atta hai [global execution] (ye run hona hi hona hai)
and isko locate kiya jata hai this ke andar 
 now step 2 :-

 now memory phase 
 sare variable ko ikatha krke rakha jata hai (and sbka value undfined rakha jata hai )
 val1 = undefined 
 val2 = undefined 
 addNum -> function defination jayegi 
 result1 = undefined ;
 result2 = undefined 

 now step 3 Execution Phase :-
 val1 <- 10
 val2 <- 5;
 addNum <- defination already hold krke rkh di hai 
  (interesting) ::::
  result1  <- iska andar jana tha addNum ye function hai isley ye apna ek alag execution context banyega
no niche wal sb kaam hone ke bd result1 <- 15 hogya

{new                   }
{variable              }
{Environment           }______________________
            +          }                      |
{Execution thread      }                      |
                                              |
                                    so ab ye new sand box create ho gya now ab 
                                    ab dono kaam phirse hoga creation and execution

                Memory Phase                              Execution phase
               val1<- undefined                        val1 <- 10,  
                val2 <- undefined                      val2 <- 5,
                total <- undefined                     total <- 15 (ye retur hoga parent executional context ke pass hoga)
               Itna kaam hone ke bd ye naya executinal context delete ho jat hai 


               now call Stack >>>>>>>>>>>>>>> (Lifo based)
            [                                             ]
            [                                             ]
            [ab methods seq me ati jayegi and nilte jayegi]
            [        Global EC                            ]


*/