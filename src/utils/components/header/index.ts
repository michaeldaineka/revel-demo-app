import menuSchema from 'components/Sidebar/schema/menuSchema';
import navbarSchema from 'components/Sidebar/schema/navbarSchema';

const allSchemas = Array.prototype.concat(menuSchema, navbarSchema);
allSchemas.forEach((item, index) => {
  if (Array.isArray(item)) {
    allSchemas.push(...item);
    allSchemas.splice(index, 1, []);
  }
});

export default allSchemas;
