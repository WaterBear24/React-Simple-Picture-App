import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID q4FGQf17toR7EhluY1k7R-ouUHZqINWl6lebOvW_nXY'
  }
});