import axios from "axios";
import config from "../config/config";

const userSignUp = async (payload: any) => {
    try {
      const result = await axios.post(`${config.domain}/api/signup`, payload);
      return result;
    } catch (error) {
      return await error;
    }
  };

const getAllUser = async () => {
    try {
      const result = await axios.get(`${config.domain}/api`);
      return result;
    } catch (error) {
      return await error;
    }
  };

const getOneUser = async (id:any) => {
    try {
      const result = await axios.get(`${config.domain}/api/${id}`);
      return result;
    } catch (error) {
      return await error;
    }
  };

  const employeeSignUp = async (payload: any) => {
    try {
      const result = await axios.post(`${config.domain}/api/signupEmployee`, payload);
      return result;
    } catch (error) {
      return await error;
    }
  };


  const getAllEmployee = async () => {
    try {
      const result = await axios.get(`${config.domain}/api/users/employees`);
      return result;
    } catch (error) {
      return await error;
    }
  };


  const userLogin = async (payload: any) => {
    try {
      const result = await axios.post(`${config.domain}/api/signin`, payload);
      return result;
    } catch (error:any) {
      return error.response;
    }
  };

  const editProfile = async (payload: any) => {
   const formData = new FormData();
  formData.append('id', payload.id);
  formData.append('username', payload.username);
  formData.append('firstName', payload.firstName);
  formData.append('lastName', payload.lastName);
  formData.append('birthdate', payload.birthdate);
  formData.append('file', payload.file); // Menambahkan file ke FormData

  console.log(formData)
    try {
      const result = await axios.put(`${config.domain}/api/users/profile/edit/${payload.id}`, formData);
      return result;
    } catch (error:any) {
      return error.response;
    }
  };

  export default {
    userSignUp,
    getAllUser,
    employeeSignUp,
    getAllEmployee,
    userLogin,
    getOneUser,
    editProfile
  }