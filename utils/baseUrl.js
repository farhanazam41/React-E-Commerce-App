const baseUrl = 
  process.env.NODE_ENV === "production"
    ? 'https://home-decor.now.sh' 
    : 'http://localhost:3000' ;

export default baseUrl;    
