import axios from "axios";

const url = "http://localhost:5000/api/projects";

export const getAllProjects = async () => {
  try {
    const response = await axios.get(url);
    return  response.data.answer ;
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
