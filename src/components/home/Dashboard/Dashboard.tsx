import DashboardContent from './DashboardContent/DashboardContent';
import DashboardHeader from './DashboardHeader/DashboardHeader';

function Dashboard() {
  return (
    <div className='h-max bg-[#252020]'>
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
