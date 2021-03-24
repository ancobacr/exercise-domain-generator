/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* 
 generateDomain () => {
    let pronoun = ['the','our', 'last',];
    let adj = ['great', 'big', 'of'];
    let noun = ['jogger','racom', 'us'  ];
    let domainName = ['com', 'net', 'us', 'io' ];
    
    for(let i=0;i<pronoun.length;i++){
        for(let j=0;j<adj.length;j++){
            for(let k=0;k<noun.length;k++)
        }
    }
    return url(pronoun[i]+adj[j]+noun[k]+domainName[m]);
}*/

//window.onload = () => {

    let generateDomain = () => {
        let pronoun = ['the','our', 'last',];
        let adj = ['great', 'big', 'of'];
        let noun = ['jogger','racom', 'us'  ];
        let domainName = ['com', 'net', 'us', 'io'];
    
        for (let i = 0; i < pronoun.length; i++) {
            for (let j = 0; j < adj.length; j++) {
                for (let k = 0; k < noun.length; k++) {
                    for (let m = 0; m < domainName.length; m++) {
                        let string = pronoun[i] + adj[j] + noun[k];
                        if (string.includes(domainName[m])) {
                            let newString = string.replace(domainName[m], " ")
                            let resultString = newString +'.'+domainName[m]
                            console.log(resultString)
                            } else {
                                let url = pronoun[i] + adj[j] + noun[k] +'.'+ domainName[m]
                                console.log(url)
                            };
    
                        };
                    };
                };
            };
        };
    generateDomain();
    
//};
