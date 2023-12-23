export const  generateUniqueId = (prefix = "id") => {
    const randomString = Math.random().toString(36).substring(2, 10);
    const timestamp = new Date().getTime();
    return `${prefix}_${timestamp}_${randomString}`;
  }
  
  const uniqueId = generateUniqueId();
  console.log(uniqueId);
  
