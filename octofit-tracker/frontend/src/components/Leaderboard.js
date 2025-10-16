import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setLeaders(results);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="card-header bg-success text-white">
          <h2 className="mb-0">Leaderboard</h2>
        </div>
        <div className="card-body">
          <button className="btn btn-primary mb-3" type="button" data-bs-toggle="modal" data-bs-target="#leaderboardModal">
            Add Leader
          </button>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  {leaders[0] && Object.keys(leaders[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaders.map((leader, idx) => (
                  <tr key={leader.id || idx}>
                    <td>{idx + 1}</td>
                    {Object.keys(leader).map((key) => (
                      <td key={key}>{String(leader[key])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal placeholder */}
      <div className="modal fade" id="leaderboardModal" tabIndex="-1" aria-labelledby="leaderboardModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="leaderboardModalLabel">Add Leader</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Bootstrap form placeholder */}
              <form>
                <div className="mb-3">
                  <label htmlFor="leaderName" className="form-label">Leader Name</label>
                  <input type="text" className="form-control" id="leaderName" />
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

export default Leaderboard;
