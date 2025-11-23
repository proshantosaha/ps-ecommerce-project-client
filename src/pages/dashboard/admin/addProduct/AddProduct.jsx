import React, { useState } from 'react'
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import UploadImage from './UploadImage';
import { useSelector } from 'react-redux';
import { useAddProductMutation } from '../../../../redux/features/products/productApi';

const categories = [
    { label: "Select Category", value: "" },
    { label: "Accessories", value: "accessories" },
    { label: "Dress", value: "dress" },
    { label: "Jewellery", value: "jewellery" },
    { label: "Cosmetics", value: "cosmetics" },
]

const colors = [
    { label: 'Select Color', value: '' },
    { label: 'Black', value: 'black' },
    { label: 'Red', value: 'red' },
    { label: 'Gold', value: 'gold' },
    { label: 'Blue', value: 'blue' },
    { label: 'Silver', value: 'silver' },
    { label: 'Beige', value: 'beige' },
    { label: 'Green', value: 'green' }
];

const AddProduct = () => {
  const { user } = useSelector(state => state.auth);
  const [product, setProduct] = useState({ name: '', category: '', description: '', price: '', color: '' });
  const [image, setImage] = useState("");
  const [addProductMutation, { isLoading, error }] = useAddProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name || !product.category || !product.price || !product.color || !product.description || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    try {
      await addProductMutation({ ...product, image, author: user?._id }).unwrap();
      alert('Product added successfully!');
      setProduct({ name: '', category: '', description: '', price: '', color: '' });
      setImage("");
    } catch (err) {
      console.error('Failed to add product:', err);
      alert(err?.data?.message || 'Failed to add product.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {/* inputs */}
      <TextInput type="text" label='Product Name' name="name" value={product.name} onChange={handleChange} />
      <SelectInput label="Category" name="category" value={product.category} onChange={handleChange} options={categories} />
      <SelectInput label="Color" name="color" value={product.color} onChange={handleChange} options={colors} />
      <TextInput type="number" label='Price' name="price" value={product.price} onChange={handleChange} />
      <UploadImage label="Image" name="image" id="image" setImage={setImage} />
      <textarea name="description" rows="6" value={product.description} onChange={handleChange} className='add-product-InputCSS' />
      <button type='submit' className='add-product-btn' disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  )
}


export default AddProduct