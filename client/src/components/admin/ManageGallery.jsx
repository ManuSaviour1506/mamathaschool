import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

function ManageGallery() {
  const [photos, setPhotos] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [isFileReady, setIsFileReady] = useState(false);
  const [message, setMessage] = useState('');
  const { token } = useAuth();

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/gallery');
      setPhotos(response.data);
      setFetchError(null);
    } catch (err) {
      setFetchError('Failed to fetch photos. Please try again.');
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setIsFileReady(false);
      setMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
        setIsFileReady(true);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!file) {
      setMessage('Please select a file.');
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        'http://localhost:5001/api/gallery',
        { file },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setFile(null);
      setIsFileReady(false);
      document.getElementById('file-input').value = '';
      setMessage('Photo uploaded successfully!');
      fetchPhotos();
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to upload photo.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (photoId) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      try {
        await axios.delete(
          `http://localhost:5001/api/gallery/${photoId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessage('Photo deleted successfully!');
        fetchPhotos();
      } catch (err) {
        setMessage(err.response?.data?.message || 'Failed to delete photo.');
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Gallery</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 p-6 border dark:border-gray-700 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Upload New Photo</h3>
        <div className="mb-4">
          <label htmlFor="file-input" className="block text-sm font-medium mb-1">Image File</label>
          <input type="file" id="file-input" onChange={handleFileChange} required className="w-full" />
        </div>
        <button 
          type="submit" 
          disabled={loading || !isFileReady}
          className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}

      <h3 className="text-xl font-semibold mb-4">Existing Photos</h3>
      {fetchError && <p className="text-red-500 mb-4">{fetchError}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo._id} className="relative p-2 border dark:border-gray-700 rounded-lg shadow-sm">
              <img src={photo.imageUrl} alt="School Photo" className="w-full h-40 object-cover rounded mb-2" />
              <button onClick={() => handleDelete(photo._id)} className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-tr-lg rounded-bl-lg">
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No photos have been uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default ManageGallery;