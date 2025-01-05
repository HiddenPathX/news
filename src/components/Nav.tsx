import React from 'react';

function Nav() {
  const handleReturnToPomodoro = () => {
    window.location.href = 'https://learning-btl.pages.dev/';
  };

  return (
    <nav>
      <div 
        className="nav-item"
        onClick={handleReturnToPomodoro}
        style={{ cursor: 'pointer' }}
      >
        返回番茄钟
      </div>
    </nav>
  );
}

export default Nav; 