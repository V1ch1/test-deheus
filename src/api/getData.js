import { REACT_APP_API_KEY } from "../constants/constants";
import apiError from "./apiError";

const getData = async () => {
  try {
    const response = await fetch(REACT_APP_API_KEY);
    if (!response.ok) {
      throw new apiError(400, "No se encontraron datos");
    }
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error("err", err);
  }
};

export default getData;
