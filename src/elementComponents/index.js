// import * as elementComponents from 'ant-design-vue'
import Vue from 'vue'
// import 'element-ui/lib/theme-chalk/index.css';
import '@a/styles/index.scss';

import {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Loading,
  Alert,
  Dialog,
  Form,
  FormItem,
  Input,
  Radio,
  Select,
  Option,
  Cascader,
  Message,
  MessageBox,
  Pagination,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Scrollbar,
  Breadcrumb,
  BreadcrumbItem,
  Divider,
  Tag,
  ColorPicker,
  Steps,
  Step,
  DatePicker,
  Upload,
  Progress,

} from 'element-ui'

const elementComponents = {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Tabs,
  TabPane,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Loading,
  Alert,
  Dialog,
  Form,
  FormItem,
  Input,
  Radio,
  Select,
  Option,
  Cascader,
  Pagination,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Scrollbar,
  Breadcrumb,
  BreadcrumbItem,
  Divider,
  Tag,
  ColorPicker,
  Steps,
  Step,
  DatePicker,
  Upload,
  Progress,

}

Object.values(elementComponents).forEach(item => {
  if (item instanceof Function || typeof item === 'string') return
  Vue.use(item)
})

Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox