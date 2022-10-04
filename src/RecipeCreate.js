import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  //Reset form
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  //Form state
  const [formData, setFormData] = useState({ ...initialFormState });
  
  
  //Handling inputs into the FormData state
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
//     console.log(formData)
  };
  
  //Handling the submit to createRecipe
  const handleSubmit = (event) => {
    event.preventDefault();
//     console.log(formData)
    createRecipe(formData)
    setFormData({...initialFormState});
  };
  
  //Returning the form to render
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange}/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange}/>
            </td>
            <td>
              <input id="url" name="photo" type="text" placeholder="URL" value={formData.photo} onChange={handleChange}/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange}></textarea>
            </td>
            <td>
              <textarea id="preparation" name="preparation" type="text" placeholder="Preparation" value={formData.preparation} onChange={handleChange}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
