import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Activities</h2>
        </div>
        <div className="card-body">
          <button className="btn btn-success mb-3" type="button" data-bs-toggle="modal" data-bs-target="#activityModal">
            Add Activity
          </button>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  {activities[0] && Object.keys(activities[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <td>{idx + 1}</td>
                    {Object.keys(activity).map((key) => (
                      <td key={key}>{String(activity[key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal placeholder */}
      <div className="modal fade" id="activityModal" tabIndex="-1" aria-labelledby="activityModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="activityModalLabel">Add Activity</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Bootstrap form placeholder */}
              <form>
                <div className="mb-3">
                  <label htmlFor="activityName" className="form-label">Activity Name</label>
                  <input type="text" className="form-control" id="activityName" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
