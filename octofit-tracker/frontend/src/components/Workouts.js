import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setWorkouts(results);
        console.log('Fetched workouts:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-header bg-dark text-white">
          <h2 className="mb-0">Workouts</h2>
        </div>
        <div className="card-body">
          <button className="btn btn-danger mb-3" type="button" data-bs-toggle="modal" data-bs-target="#workoutsModal">
            Add Workout
          </button>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  {workouts[0] && Object.keys(workouts[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout, idx) => (
                  <tr key={workout.id || idx}>
                    <td>{idx + 1}</td>
                    {Object.keys(workout).map((key) => (
                      <td key={key}>{String(workout[key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal placeholder */}
      <div className="modal fade" id="workoutsModal" tabIndex="-1" aria-labelledby="workoutsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="workoutsModalLabel">Add Workout</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Bootstrap form placeholder */}
              <form>
                <div className="mb-3">
                  <label htmlFor="workoutName" className="form-label">Workout Name</label>
                  <input type="text" className="form-control" id="workoutName" />
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

export default Workouts;
