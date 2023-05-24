import { Table } from 'antd';
import { columns, data } from './tableConfig';

const UserList: React.FC = () => <Table columns={columns} dataSource={data} size="small"/>;

export default UserList;