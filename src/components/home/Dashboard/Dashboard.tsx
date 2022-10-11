import DashboardContent from './DashboardContent/DashboardContent';
import DashboardHeader from './DashboardHeader/DashboardHeader';

function Dashboard() {
  return (
    <div className='h-screen bg-black'>
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
