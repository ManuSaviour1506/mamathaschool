import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

function ManageContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://mamathaschool.onrender.com/api/contact', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Failed to fetch contact submissions. Please log in again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchContacts();
    }
  }, [token]);

  if (loading) {
    return <p className="text-center">Loading contacts...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Contacts</h2>
      {contacts.length > 0 ? (
        <ul className="space-y-4">
          {contacts.map(contact => (
            <li key={contact._id} className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-semibold text-lg">{contact.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email: {contact.email}</p>
              <p className="text-sm mt-2">{contact.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Received: {new Date(contact.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No new contact messages.</p>
      )}
    </div>
  );
}

export default ManageContacts;
