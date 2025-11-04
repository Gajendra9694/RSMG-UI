import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Layout } from './Components/layout/layout';
import { Dashboard1 } from './Components/dashboard1/dashboard1';
// import { City } from './Pages/city/city';
import { District } from './Pages/district/district';
import { FuelRate } from './Pages/fuel-rate/fuel-rate';
import { FuelType } from './Pages/fuel-type/fuel-type';
import { VehicleAverage } from './Pages/vehicle-average/vehicle-average';
import { GuestCategory } from './Pages/guest-category/guest-category';
import { VehicleStrength } from './Pages/vehicle-strength/vehicle-strength';
import { AccountOpening } from './Pages/account-opening/account-opening';
import { BillingDepartment } from './Pages/billing-department/billing-department';
import { DepartmentList } from './Pages/department/department-list/department-list';
import { DepartmentForm } from './Pages/department/department-form/department-form';
import { SupplierList } from './Pages/supplier/supplier-list/supplier-list';
import { SupplierReg } from './Pages/supplier/supplier-reg/supplier-reg';
import { EmployeeList } from './Pages/employee/employee-list/employee-list';
import { EmployeeForm } from './Pages/employee/employee-form/employee-form';
import { LookUp } from './Pages/look-up/look-up';
import { RunningDeptAccount } from './Pages/running-dept-account/running-dept-account';
import { VehicleRateList } from './Pages/vehicle-rate-chart/vehicle-rate-list/vehicle-rate-list';
import { VehicleRateForm } from './Pages/vehicle-rate-chart/vehicle-rate-form/vehicle-rate-form';
import { ItemList } from './Pages/item/item-list/item-list';
import { ItemForm } from './Pages/item/item-form/item-form';
import { ItemMainGroup } from './Pages/item-main-group/item-main-group';
import { ItemSubGroup } from './Pages/item-sub-group/item-sub-group';
import { ItemSubSubGroup } from './Pages/item-sub-sub-group/item-sub-sub-group';
import { Units } from './Pages/units/units';
import { SupplierType } from './Pages/supplier-type/supplier-type';
import { OpeningStock } from './Pages/opening-stock/opening-stock';
import { Bank } from './Pages/bank/bank';
import { VehicleList } from './Pages/vehicle/vehicle-list/vehicle-list';
import { VehicleRegister } from './Pages/vehicle/vehicle-register/vehicle-register';
import { VehicleType } from './Pages/vehicle-type/vehicle-type';
import { VehicleModel } from './Pages/vehicle-model/vehicle-model';
import { Tools } from './Pages/tools/tools';
import { CompanyList } from './Pages/company/company-list/company-list';
import { CompanyReg } from './Pages/company/company-reg/company-reg';
import { AuctionType } from './Pages/auction-type/auction-type';
import { WorkList } from './Pages/work/work-list/work-list';
import { WorkForm } from './Pages/work/work-form/work-form';
import { SaleEntryForm } from './transaction/sale-entry/sale-entry-form/sale-entry-form';
import { SaleEntryList } from './transaction/sale-entry/sale-entry-list/sale-entry-list';
import { DipEntryForm } from './transaction/dip-entry/dip-entry-form/dip-entry-form';
import { DipEntryList } from './transaction/dip-entry/dip-entry-list/dip-entry-list';
import { DepartmentAccount } from './transaction/department-account/department-account';
import { FuelEvaporationList } from './transaction/fuel-evaporation/fuel-evaporation-list/fuel-evaporation-list';
import { FuelEvaporationForm } from './transaction/fuel-evaporation/fuel-evaporation-form/fuel-evaporation-form';
import { OutsideFuelLedgerList } from './transaction/outside-fuel-entry/outside-fuel-ledger-list/outside-fuel-ledger-list';
import { OutsideFuelLedgerForm } from './transaction/outside-fuel-entry/outside-fuel-ledger-form/outside-fuel-ledger-form';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: Login
  },
  {
    path: '',
    component: Layout,
    children:
      [
        {
          path: 'Dashboard1',
          component: Dashboard1,
          title: 'Dashboard 1'
        },
        // {
        //     path:'City',
        //     component: City,
        //     title:'City'
        //   },
        {
          path: 'District',
          component: District,
          title: 'district'
        },
        {
          path: 'FuelRate',
          component: FuelRate,
          title: 'fuelrate'
        },
        {
          path: 'FuelType',
          component: FuelType,
          title: 'fueltype'
        },

        {
          path: 'VeicleAvg',
          component: VehicleAverage,
          title: 'vehicleAvg'
        },
        {
          path: 'GuestCategory',
          component: GuestCategory,
          title: 'GuestCategory'
        },

        {
          path: 'VehicleStrength',
          component: VehicleStrength,
          title: 'VehicleStrength'
        },

        {
          path: 'AccountOpen',
          component: AccountOpening,
          title: 'AccountOpen'
        },
        {
          path: 'DeptBilling',
          component: BillingDepartment,
          title: 'DeptBill'
        },

        {
          path: 'Department',
          component: DepartmentList,
          title: 'DeptBill'
        }
        ,

        {
          path: 'DepartmentForm',
          component: DepartmentForm,
          title: 'DeptBill'
        }

        ,

        {
          path: 'SupplierList',
          component: SupplierList,
          title: 'supplierList'
        }

        ,

        {
          path: 'SupplierForm',
          component: SupplierReg,
          title: 'SupplierForm'
        }
        ,

        {
          path: 'EmployeeList',
          component: EmployeeList,
          title: 'employeelist'
        }

        ,

        {
          path: 'EmployeeForm',
          component: EmployeeForm,
          title: 'employeeform'
        }
        ,

        {
          path: 'LookUp',
          component: LookUp,
          title: 'LookUp'
        }

        ,

        {
          path: 'OnPaymentDeptAccount',
          component: RunningDeptAccount,
          title: 'OnPayment'
        }


        ,

        {
          path: 'VehicleRateChartList',
          component: VehicleRateList,
          title: 'VehicleRateChartList'
        }

        ,

        {
          path: 'VehicleRateChartForm',
          component: VehicleRateForm,
          title: 'VehicleRateChartForm'
        }
        ,

        {
          path: 'ItemList',
          component: ItemList,
          title: 'ItemList'
        },

        {
          path: 'ItemForm',
          component: ItemForm,
          title: 'ItemForm'
        }
        ,

        {
          path: 'ItemGoup',
          component: ItemMainGroup,
          title: 'itemGroup'
        },

        {
          path: 'ItemSubGoup',
          component: ItemSubGroup,
          title: 'itemSubGroup'
        }
        ,

        {
          path: 'ItemSubSubGoup',
          component: ItemSubSubGroup,
          title: 'itemSubSubGroup'
        }
         ,

        {
          path: 'Unit',
          component: Units,
          title: 'unit'
        }

        ,

        {
          path: 'SupplierType',
          component: SupplierType,
          title: 'SupplierType'
        }
 ,

        {
          path: 'OpeningBalance',
          component: OpeningStock,
          title: 'OpeningBalance'
        }
         ,

        {
          path: 'Bank',
          component: Bank,
          title: 'bank'
        }


 ,

        {
          path: 'VehicleList',
          component: VehicleList,
          title: 'vehicleList'
        }
         ,

        {
          path: 'VehicleForm',
          component: VehicleRegister,
          title: 'vehicleForm'
        }

        ,

        {
          path: 'VehicleType',
          component: VehicleType,
          title: 'vehicleType'
        }

        ,

        {
          path: 'VehicleModel',
          component: VehicleModel,
          title: 'vehicleModel'
        }
     ,

        {
          path: 'Tools',
          component: Tools,
          title: 'tools'
        }

          ,

        {
          path: 'CompanyList',
          component: CompanyList,
          title: 'CompanyList'
        }

          ,

        {
          path: 'CompanyForm',
          component: CompanyReg,
          title: 'CompanyForm'
        }

   ,

        {
          path: 'AuctionMaster',
          component: AuctionType,
          title: 'Auction'
        }

   ,

        {
          path: 'WorkList',
          component: WorkList,
          title: 'worklist'
        }
   ,

        {
          path: 'WorkForm',
          component: WorkForm,
          title: 'workform'
        }
   ,

        {
          path: 'SaleForm',
          component: SaleEntryForm,
          title: 'saleForm'
        }


   ,

        {
          path: 'SaleList',
          component: SaleEntryList,
          title: 'saleList'
        }



        

   ,

        {
          path: 'DipEntryList',
          component: DipEntryList,
          title: 'dipList'
        }


 ,

        {
          path: 'DipEntryForm',
          component: DipEntryForm,
          title: 'dipForm'
        }

 ,

        {
          path: 'DepartmentAcc',
          component: DepartmentAccount,
          title: 'departmentAcc'
        }


 ,

        {
          path: 'FuelEvaporationList',
          component: FuelEvaporationList,
          title: 'fuelEvaporationList'
        }

 ,

        {
          path: 'FuelEvaporationForm',
          component: FuelEvaporationForm,
          title: 'fuelEvaporationForm'
        }


 ,

        {
          path: 'OutsideFuelList',
          component: OutsideFuelLedgerList,
          title: 'outsideFuelList'
        }

 ,

        {
          path: 'OutsideFuelForm',
          component: OutsideFuelLedgerForm,
          title: 'outsideFuelForm'
        }






      ]
  }
];
