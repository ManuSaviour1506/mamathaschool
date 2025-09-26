import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

function ManageAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const fetchAdmissions = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/admission', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmissions(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Failed to fetch admissions. Please log in again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAdmissions();
    }
  }, [token]);

  if (loading) {
    return <p className="text-center">Loading admissions...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Admissions</h2>
      {admissions.length > 0 ? (
        <ul className="space-y-4">
          {admissions.map(admission => (
            <li key={admission._id} className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-semibold text-lg">{admission.studentName}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Grade: {admission.gradeApplyingFor}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Parent: {admission.parentName} ({admission.parentEmail})</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Submitted on: {new Date(admission.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No new admission forms.</p>
      )}
    </div>
  );
}

export default ManageAdmissions;