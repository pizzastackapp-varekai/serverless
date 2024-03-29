import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String'];
};

export type AdminRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String'];
};

export type CloudinarySingatureOutput = {
  __typename?: 'CloudinarySingatureOutput';
  apiKey: Scalars['String'];
  cloudName: Scalars['String'];
  publicId: Scalars['String'];
  signature: Scalars['String'];
  timestamp: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  id: Scalars['uuid'];
  /** An array relationship */
  menu_items: Array<Menu>;
  /** An aggregate relationship */
  menu_items_aggregate: Menu_Aggregate;
  slug: Scalars['String'];
  title: Scalars['String'];
};


/** columns and relationships of "categories" */
export type CategoriesMenu_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesMenu_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  menu_items?: InputMaybe<Menu_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  menu_items?: InputMaybe<Menu_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_items_aggregate?: InputMaybe<Menu_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "menu" */
export type Menu = {
  __typename?: 'menu';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id: Scalars['uuid'];
  id: Scalars['uuid'];
  image: Scalars['String'];
  ingredients?: Maybe<Scalars['String']>;
  price: Scalars['numeric'];
  title: Scalars['String'];
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "menu" */
export type Menu_Aggregate = {
  __typename?: 'menu_aggregate';
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Array<Menu>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_Fields = {
  __typename?: 'menu_aggregate_fields';
  avg?: Maybe<Menu_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
};


/** aggregate fields of "menu" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "menu" */
export type Menu_Aggregate_Order_By = {
  avg?: InputMaybe<Menu_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Menu_Max_Order_By>;
  min?: InputMaybe<Menu_Min_Order_By>;
  stddev?: InputMaybe<Menu_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Menu_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Menu_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Menu_Sum_Order_By>;
  var_pop?: InputMaybe<Menu_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Menu_Var_Samp_Order_By>;
  variance?: InputMaybe<Menu_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "menu" */
export type Menu_Arr_Rel_Insert_Input = {
  data: Array<Menu_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
  __typename?: 'menu_avg_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "menu" */
export type Menu_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Bool_Exp>>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Menu_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuPkey = 'menu_pkey'
}

/** input type for incrementing numeric columns in table "menu" */
export type Menu_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "menu" */
export type Menu_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: 'menu_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "menu" */
export type Menu_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: 'menu_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "menu" */
export type Menu_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "menu" */
export type Menu_Mutation_Response = {
  __typename?: 'menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Menu>;
};

/** input type for inserting object relation for remote table "menu" */
export type Menu_Obj_Rel_Insert_Input = {
  data: Menu_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** on_conflict condition type for table "menu" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint;
  update_columns?: Array<Menu_Update_Column>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "menu". */
export type Menu_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menu */
export type Menu_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "menu" */
export type Menu_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
  __typename?: 'menu_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "menu" */
export type Menu_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
  __typename?: 'menu_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "menu" */
export type Menu_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
  __typename?: 'menu_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "menu" */
export type Menu_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
  __typename?: 'menu_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "menu" */
export type Menu_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "menu" */
export enum Menu_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
  __typename?: 'menu_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "menu" */
export type Menu_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
  __typename?: 'menu_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "menu" */
export type Menu_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
  __typename?: 'menu_variance_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "menu" */
export type Menu_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "menu" */
  delete_menu?: Maybe<Menu_Mutation_Response>;
  /** delete single row from the table: "menu" */
  delete_menu_by_pk?: Maybe<Menu>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_menu" */
  delete_orders_menu?: Maybe<Orders_Menu_Mutation_Response>;
  /** delete single row from the table: "orders_menu" */
  delete_orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** delete data from the table: "settings" */
  delete_settings?: Maybe<Settings_Mutation_Response>;
  /** delete single row from the table: "settings" */
  delete_settings_by_pk?: Maybe<Settings>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "menu" */
  insert_menu?: Maybe<Menu_Mutation_Response>;
  /** insert a single row into the table: "menu" */
  insert_menu_one?: Maybe<Menu>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert data into the table: "orders_menu" */
  insert_orders_menu?: Maybe<Orders_Menu_Mutation_Response>;
  /** insert a single row into the table: "orders_menu" */
  insert_orders_menu_one?: Maybe<Orders_Menu>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "settings" */
  insert_settings?: Maybe<Settings_Mutation_Response>;
  /** insert a single row into the table: "settings" */
  insert_settings_one?: Maybe<Settings>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "menu" */
  update_menu?: Maybe<Menu_Mutation_Response>;
  /** update single row of the table: "menu" */
  update_menu_by_pk?: Maybe<Menu>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "orders_menu" */
  update_orders_menu?: Maybe<Orders_Menu_Mutation_Response>;
  /** update single row of the table: "orders_menu" */
  update_orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** update data of the table: "settings" */
  update_settings?: Maybe<Settings_Mutation_Response>;
  /** update single row of the table: "settings" */
  update_settings_by_pk?: Maybe<Settings>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_MenuArgs = {
  where: Orders_Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Menu_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SettingsArgs = {
  where: Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Settings_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_MenuArgs = {
  objects: Array<Orders_Menu_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Menu_OneArgs = {
  object: Orders_Menu_Insert_Input;
  on_conflict?: InputMaybe<Orders_Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SettingsArgs = {
  objects: Array<Settings_Insert_Input>;
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Settings_OneArgs = {
  object: Settings_Insert_Input;
  on_conflict?: InputMaybe<Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_MenuArgs = {
  _set?: InputMaybe<Orders_Menu_Set_Input>;
  where: Orders_Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Menu_By_PkArgs = {
  _set?: InputMaybe<Orders_Menu_Set_Input>;
  pk_columns: Orders_Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SettingsArgs = {
  _set?: InputMaybe<Settings_Set_Input>;
  where: Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Settings_By_PkArgs = {
  _set?: InputMaybe<Settings_Set_Input>;
  pk_columns: Settings_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  id: Scalars['String'];
  label: Scalars['String'];
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderStatusPkey = 'order_status_pkey'
}

export enum Order_Status_Enum {
  /** Відмінений */
  Canceled = 'CANCELED',
  /** Виданий клієнту */
  Delivered = 'DELIVERED',
  /** Готовий до видачі */
  Done = 'DONE',
  /** Готується */
  InProgress = 'IN_PROGRESS',
  /** Новий */
  New = 'NEW'
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Enum>;
  _in?: InputMaybe<Array<Order_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Order_Status_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** on_conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  client_address: Scalars['String'];
  client_name: Scalars['String'];
  client_phone: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An array relationship */
  order_items: Array<Orders_Menu>;
  /** An aggregate relationship */
  order_items_aggregate: Orders_Menu_Aggregate;
  status: Order_Status_Enum;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  client_address?: InputMaybe<String_Comparison_Exp>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  client_phone?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_items?: InputMaybe<Orders_Menu_Bool_Exp>;
  status?: InputMaybe<Order_Status_Enum_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  client_address?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  client_phone?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_items?: InputMaybe<Orders_Menu_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  client_address?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  client_phone?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "orders_menu" */
export type Orders_Menu = {
  __typename?: 'orders_menu';
  id: Scalars['uuid'];
  /** An object relationship */
  item?: Maybe<Menu>;
  menu_id: Scalars['uuid'];
  order_id: Scalars['uuid'];
};

/** aggregated selection of "orders_menu" */
export type Orders_Menu_Aggregate = {
  __typename?: 'orders_menu_aggregate';
  aggregate?: Maybe<Orders_Menu_Aggregate_Fields>;
  nodes: Array<Orders_Menu>;
};

/** aggregate fields of "orders_menu" */
export type Orders_Menu_Aggregate_Fields = {
  __typename?: 'orders_menu_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Menu_Max_Fields>;
  min?: Maybe<Orders_Menu_Min_Fields>;
};


/** aggregate fields of "orders_menu" */
export type Orders_Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders_menu" */
export type Orders_Menu_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Menu_Max_Order_By>;
  min?: InputMaybe<Orders_Menu_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders_menu" */
export type Orders_Menu_Arr_Rel_Insert_Input = {
  data: Array<Orders_Menu_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_Menu_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders_menu". All fields are combined with a logical 'AND'. */
export type Orders_Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Menu_Bool_Exp>>;
  _not?: InputMaybe<Orders_Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Menu_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Menu_Bool_Exp>;
  menu_id?: InputMaybe<Uuid_Comparison_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_menu" */
export enum Orders_Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersMenuPkey = 'orders_menu_pkey'
}

/** input type for inserting data into table "orders_menu" */
export type Orders_Menu_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  item?: InputMaybe<Menu_Obj_Rel_Insert_Input>;
  menu_id?: InputMaybe<Scalars['uuid']>;
  order_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Orders_Menu_Max_Fields = {
  __typename?: 'orders_menu_max_fields';
  id?: Maybe<Scalars['uuid']>;
  menu_id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "orders_menu" */
export type Orders_Menu_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Menu_Min_Fields = {
  __typename?: 'orders_menu_min_fields';
  id?: Maybe<Scalars['uuid']>;
  menu_id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "orders_menu" */
export type Orders_Menu_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  menu_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_menu" */
export type Orders_Menu_Mutation_Response = {
  __typename?: 'orders_menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Menu>;
};

/** on_conflict condition type for table "orders_menu" */
export type Orders_Menu_On_Conflict = {
  constraint: Orders_Menu_Constraint;
  update_columns?: Array<Orders_Menu_Update_Column>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_menu". */
export type Orders_Menu_Order_By = {
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Menu_Order_By>;
  menu_id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_menu */
export type Orders_Menu_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders_menu" */
export enum Orders_Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menu_id',
  /** column name */
  OrderId = 'order_id'
}

/** input type for updating data in table "orders_menu" */
export type Orders_Menu_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  menu_id?: InputMaybe<Scalars['uuid']>;
  order_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "orders_menu" */
export enum Orders_Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MenuId = 'menu_id',
  /** column name */
  OrderId = 'order_id'
}

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  client_address?: Maybe<Scalars['String']>;
  client_name?: Maybe<Scalars['String']>;
  client_phone?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Orders_Menu_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  client_address?: InputMaybe<Scalars['String']>;
  client_name?: InputMaybe<Scalars['String']>;
  client_phone?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetMeOutput>;
  /** Login admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  cloudinarySignature?: Maybe<CloudinarySingatureOutput>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_menu" */
  orders_menu: Array<Orders_Menu>;
  /** fetch aggregated fields from the table: "orders_menu" */
  orders_menu_aggregate: Orders_Menu_Aggregate;
  /** fetch data from the table: "orders_menu" using primary key columns */
  orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: Settings_Aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Query_RootMenu_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrders_MenuArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Query_RootOrders_Menu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Query_RootOrders_Menu_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Query_RootSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Query_RootSettings_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "settings" */
export type Settings = {
  __typename?: 'settings';
  drinks_category?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
};

/** aggregated selection of "settings" */
export type Settings_Aggregate = {
  __typename?: 'settings_aggregate';
  aggregate?: Maybe<Settings_Aggregate_Fields>;
  nodes: Array<Settings>;
};

/** aggregate fields of "settings" */
export type Settings_Aggregate_Fields = {
  __typename?: 'settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Settings_Max_Fields>;
  min?: Maybe<Settings_Min_Fields>;
};


/** aggregate fields of "settings" */
export type Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "settings". All fields are combined with a logical 'AND'. */
export type Settings_Bool_Exp = {
  _and?: InputMaybe<Array<Settings_Bool_Exp>>;
  _not?: InputMaybe<Settings_Bool_Exp>;
  _or?: InputMaybe<Array<Settings_Bool_Exp>>;
  drinks_category?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "settings" */
export enum Settings_Constraint {
  /** unique or primary key constraint on columns "id" */
  SettingsPkey = 'settings_pkey'
}

/** input type for inserting data into table "settings" */
export type Settings_Insert_Input = {
  drinks_category?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Settings_Max_Fields = {
  __typename?: 'settings_max_fields';
  drinks_category?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Settings_Min_Fields = {
  __typename?: 'settings_min_fields';
  drinks_category?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "settings" */
export type Settings_Mutation_Response = {
  __typename?: 'settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Settings>;
};

/** on_conflict condition type for table "settings" */
export type Settings_On_Conflict = {
  constraint: Settings_Constraint;
  update_columns?: Array<Settings_Update_Column>;
  where?: InputMaybe<Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "settings". */
export type Settings_Order_By = {
  drinks_category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: settings */
export type Settings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "settings" */
export enum Settings_Select_Column {
  /** column name */
  DrinksCategory = 'drinks_category',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "settings" */
export type Settings_Set_Input = {
  drinks_category?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "settings" */
export enum Settings_Update_Column {
  /** column name */
  DrinksCategory = 'drinks_category',
  /** column name */
  Id = 'id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_menu" */
  orders_menu: Array<Orders_Menu>;
  /** fetch aggregated fields from the table: "orders_menu" */
  orders_menu_aggregate: Orders_Menu_Aggregate;
  /** fetch data from the table: "orders_menu" using primary key columns */
  orders_menu_by_pk?: Maybe<Orders_Menu>;
  /** fetch data from the table: "settings" */
  settings: Array<Settings>;
  /** fetch aggregated fields from the table: "settings" */
  settings_aggregate: Settings_Aggregate;
  /** fetch data from the table: "settings" using primary key columns */
  settings_by_pk?: Maybe<Settings>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};


export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrders_MenuArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Subscription_RootOrders_Menu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Menu_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Menu_Order_By>>;
  where?: InputMaybe<Orders_Menu_Bool_Exp>;
};


export type Subscription_RootOrders_Menu_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSettingsArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Subscription_RootSettings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Settings_Order_By>>;
  where?: InputMaybe<Settings_Bool_Exp>;
};


export type Subscription_RootSettings_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAdminByUsernameQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
}>;


export type GetAdminByUsernameQuery = { __typename?: 'query_root', admin: Array<{ __typename?: 'admin', id: any, password: string }> };

export type InsertAdminMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;


export type InsertAdminMutation = { __typename?: 'mutation_root', insert_admin_one?: { __typename?: 'admin', id: any } | null };

export type GetAdminByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAdminByIdQuery = { __typename?: 'query_root', admin_by_pk?: { __typename?: 'admin', username: string, id: any } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any }> };

export type GetMenuItemsGroupedByCategoryIdQueryVariables = Exact<{
  firstCategory: Scalars['uuid'];
  secondCategory: Scalars['uuid'];
}>;


export type GetMenuItemsGroupedByCategoryIdQuery = { __typename?: 'query_root', firstGroup: Array<{ __typename?: 'menu', id: any }>, secondGroup: Array<{ __typename?: 'menu', id: any }> };

export type CreateFakeOrderMutationVariables = Exact<{
  client_address: Scalars['String'];
  client_name: Scalars['String'];
  client_phone: Scalars['String'];
  created_at?: InputMaybe<Scalars['timestamptz']>;
}>;


export type CreateFakeOrderMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: any } | null };

export type AddItemsToFakeOrderMutationVariables = Exact<{
  objects: Array<Orders_Menu_Insert_Input> | Orders_Menu_Insert_Input;
}>;


export type AddItemsToFakeOrderMutation = { __typename?: 'mutation_root', insert_orders_menu?: { __typename?: 'orders_menu_mutation_response', affected_rows: number } | null };


export const GetAdminByUsernameDocument = gql`
    query GetAdminByUsername($username: String = "") {
  admin(where: {username: {_eq: $username}}) {
    id
    password
  }
}
    `;
export const InsertAdminDocument = gql`
    mutation InsertAdmin($password: String, $username: String) {
  insert_admin_one(object: {username: $username, password: $password}) {
    id
  }
}
    `;
export const GetAdminByIdDocument = gql`
    query GetAdminById($id: uuid!) {
  admin_by_pk(id: $id) {
    username
    id
  }
}
    `;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories {
    id
  }
}
    `;
export const GetMenuItemsGroupedByCategoryIdDocument = gql`
    query GetMenuItemsGroupedByCategoryId($firstCategory: uuid!, $secondCategory: uuid!) {
  firstGroup: menu(where: {category_id: {_eq: $firstCategory}}) {
    id
  }
  secondGroup: menu(where: {category_id: {_eq: $secondCategory}}) {
    id
  }
}
    `;
export const CreateFakeOrderDocument = gql`
    mutation CreateFakeOrder($client_address: String!, $client_name: String!, $client_phone: String!, $created_at: timestamptz) {
  insert_orders_one(
    object: {client_address: $client_address, client_name: $client_name, client_phone: $client_phone, status: DELIVERED, created_at: $created_at}
  ) {
    id
  }
}
    `;
export const AddItemsToFakeOrderDocument = gql`
    mutation AddItemsToFakeOrder($objects: [orders_menu_insert_input!]!) {
  insert_orders_menu(objects: $objects) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAdminByUsername(variables?: GetAdminByUsernameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByUsernameQuery>(GetAdminByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminByUsername', 'query');
    },
    InsertAdmin(variables?: InsertAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAdminMutation>(InsertAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAdmin', 'mutation');
    },
    GetAdminById(variables: GetAdminByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByIdQuery>(GetAdminByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminById', 'query');
    },
    GetCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCategories', 'query');
    },
    GetMenuItemsGroupedByCategoryId(variables: GetMenuItemsGroupedByCategoryIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMenuItemsGroupedByCategoryIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMenuItemsGroupedByCategoryIdQuery>(GetMenuItemsGroupedByCategoryIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMenuItemsGroupedByCategoryId', 'query');
    },
    CreateFakeOrder(variables: CreateFakeOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateFakeOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateFakeOrderMutation>(CreateFakeOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateFakeOrder', 'mutation');
    },
    AddItemsToFakeOrder(variables: AddItemsToFakeOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddItemsToFakeOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddItemsToFakeOrderMutation>(AddItemsToFakeOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddItemsToFakeOrder', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;