import DashboardContent from './dashboard-content/DashboardContent';
import DashboardHeader from './dashboard-header/DashboardHeader';

function Dashboard() {
  return (
    <div className='h-max bg-[#252020]'>
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
