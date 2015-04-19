Devsgroup - Blog
===================
 
 > " Unidos pela amizade e uma paixão em comum. "
 
 Este repositório é destinado ao blog do grupo, espaço na web onde poderemos compartilhar um pouco de nossos conhecimentos.



##Usando BrowserSync
Após rodar o jekyll serve, use o comando gulp para que seja possivel utilizar o BrowserSync.

Obs.: Para quem usa windows basta descomentar o trecho no arquivo gulpfile e comentar o trecho para linux ou mac
 
 	//Linux/Mac
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
	
	//WINDOWS
    //return cp.exec('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
    
 
> A porta utilizada pelo BrowserSync é 3000.