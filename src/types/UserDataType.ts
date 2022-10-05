export interface UserData {
  userDetails: UserDetails;
  status: 'idle' | 'pending' | 'failed' | 'loggedin' | 'loggedout';
}

export interface UserDetails {
  username: string;
  name: string;
}
