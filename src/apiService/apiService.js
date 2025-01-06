import { adminInstance } from "./apiconfig";

export const  axiosGetProductData = async(path,config)=>{
  const response = await adminInstance.get(path, { headers: config });
  return response;
};

export const axiosPostSignin = async(path,account) =>{
  const response = await adminInstance.post(path, account);
  return response;
};

export const axiosPostCheckSingin = async(path,config) =>{
  const response = await adminInstance.post(path,{},{ headers: config });
  return response;
};

export const axiosPostLogout = async(path,config) =>{
  const response = await adminInstance.post(path,{},{ headers: config });
  return response;
};
export const axiosPostAddProduct = async(path,productData,config) =>{
  const response = await adminInstance.post(path,productData,{ headers: config });
  return response;
};

export const axiosDeleteProduct = async(path,config) =>{
  const response = await adminInstance.delete(path,{ headers: config });
  return response;
};