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
      const response = await axios.get('https://mamathaschool.onrender.com/api/gallery');
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
      // NOTE: Ensure your Express JSON limit (50mb) is high enough for the Base64 image
      const response = await axios.post(
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
      // IMPORTANT: Log the error details to the browser console for specific debugging
      console.error('Upload Error Details:', err.response || err);
      setMessage(err.response?.data?.message || 'Upload failed. Check server logs.');
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
    <div className="p-6 bg-white dark:bg-bg-dark-slate rounded-lg shadow-xl border-t-4 border-accent-teal transition duration-500">
      <h2 className="text-2xl font-bold mb-4 text-primary-blue dark:text-white">Manage Gallery</h2>
      
      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Upload New Photo</h3>
        <div className="mb-4">
          <label htmlFor="file-input" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Image File</label>
          <input 
            type="file" 
            id="file-input" 
            onChange={handleFileChange} 
            required 
            className="w-full text-gray-900 dark:text-white bg-white dark:bg-gray-600 rounded-md p-2 border border-gray-300"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading || !isFileReady}
          className="w-full p-2 bg-primary-blue text-white font-bold rounded-full hover:bg-accent-teal transition-all duration-300 disabled:bg-gray-500 transform hover:scale-[1.01]"
        >
          {loading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-accent-teal font-medium">{message}</p>}

      {/* Photo List */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Existing Photos ({photos.length})</h3>
      {fetchError && <p className="text-red-500 mb-4">{fetchError}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo._id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              <img 
                src={photo.imageUrl} 
                alt="School Gallery Image" 
                className="w-full h-36 md:h-48 object-cover" 
              />
              <button 
                onClick={() => handleDelete(photo._id)} 
                className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-sm hover:bg-red-700"
              >
                &times;
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 p-4">No photos have been uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default ManageGallery;
