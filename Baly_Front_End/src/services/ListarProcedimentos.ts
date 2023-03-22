 import axios from "axios";

export const ListarProcedimentos = async () =>{

  try {
    const response = await axios.get("http://127.0.0.1:5000/Procedimento");
    
    return response.data;
  } catch (err: any) {
    return err.response;
  }
}
