import autores from "../models/autor.js";
import NaoEncontrado from "../erros/NaoEncontrado.js"

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {
      const autoresResultado = await autores.find();

      if (autoresResultado !== null){

        res.status(200).json(autoresResultado);

      }else{

        next(new NaoEncontrado("Id do Autor não localizado."));
      }     

    } catch (erro){

      next(erro); 
    }   
  };
  
  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;  

      const autoresResultado = await autores.findById(id);

      if (autoresResultado !== null){
        
        res.status(200).send(autoresResultado);

      }else{

        next(new NaoEncontrado("Id do autor não localizado."));
      }    
     
    }catch (erro) {
      
      next(erro);      

    }   
  };
  
  static cadastrarAutor = async (req, res, next) => {
    try{
      let autor = new autores(req.body);
  
      const autoresResultado = await autor.save();    

      res.status(201).send(autoresResultado.toJSON());

      
    }catch (erro){

      next(erro); 

    }      
  };
  
  static atualizarAutor = async (req, res, next) => {
    
    try{
      const id = req.params.id;
  
      const autorResultado = await autores.findByIdAndUpdate(id, {$set: req.body});
      
      if (autorResultado !== null){

        res.status(200).send({message: "Autor atualizado com sucesso"});  

      }else{

        next(new NaoEncontrado("Id do autor não localizado."));

      }      

    }catch (erro) {
      
      next(erro);

    }      
  };
  
  static excluirAutor = async (req, res, next) => {
    
    try{
      const id = req.params.id;
  
      const autorResultado = await autores.findByIdAndDelete(id); 
      if(autorResultado !== null){

        res.status(200).send({message: "autor removido com sucesso"});

      }else{

        next(new NaoEncontrado("Id do autor não localizado."));

      }      

    }catch (erro){

      next(erro);

    }      
  };
  
}
  
export default AutorController;