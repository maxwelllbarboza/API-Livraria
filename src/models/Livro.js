import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id:     {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigatório."]
    },
    autor:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores", 
      required: [true, "O nome do autor é obrigatório."] 
    },
    editora: {
      type: String, 
      required: [true, "O nome da editora é obrigatório."],      
    },
    numeroPaginas: {
      type: Number,
      min: [10, "O número de páginas deve estar entre 10 e 5000"],
      max: [5000, "O número de páginas deve estar entre 10 e 5000"]
    }
  }
);

const livros = mongoose.model("livros", livroSchema);
export default livros;