import {VBreadcrumbsItem, VInput, VTextField} from "vuetify/components";
import * as vue from "vue";
import * as vue_router from "vue-router";

/**
 * Navigation Type
 */
type NavigationSidebar = {
  title: string,
  group?: string,
  props?: object,
  children?: Array<NavigationSidebar>
}

/**
 * BreadcrumbType
 */
type BreadcrumbItem = InstanceType<typeof VBreadcrumbsItem>['$props']
type Breadcrumb = {
  title: string,
  items: BreadcrumbItem[]
}

/**
 * Dashboard Card Type
 */
type DashboardCard = {
  replace: boolean;
  link: boolean;
  flat: boolean;
  exact: boolean;
  style: vue.StyleValue;
  disabled: boolean;
  tag: string;
  rounded: string | number | boolean;
  density: null | 'default' | 'comfortable' | 'compact';
  variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
  ripple: boolean;
  hover: boolean;
  height?: string | number | undefined;
  width?: string | number | undefined;
  active?: boolean | undefined;
  border?: string | number | boolean | undefined;
  color?: string | undefined;
  maxHeight?: string | number | undefined;
  maxWidth?: string | number | undefined;
  minHeight?: string | number | undefined;
  minWidth?: string | number | undefined;
  position?: "fixed" | "absolute" | "static" | "relative" | "sticky" | undefined;
  value?: any;
  loading?: string | boolean | undefined;
  text?: string | undefined;
  class?: any;
  href?: string | undefined;
  elevation?: string | number | undefined;
  to?: vue_router.RouteLocationRaw | undefined;
  theme?: string | undefined;
}

/**
 * Dynamic form Scheme
 */
type FormSchema = {
  name: string,
  rules: string|Object,
  flex: string|number
  props: (InstanceType<typeof VTextField>['$props'] | InstanceType<typeof VInput>['$props']) & vue.InputHTMLAttributes
  as: | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'select'
  | 'checkbox'
  | 'slider'
  | 'range-slider'
  | 'switch'
  | 'textarea'
  | 'radio'
}

export type {
  NavigationSidebar,
  Breadcrumb,
  BreadcrumbItem,
  DashboardCard,
  FormSchema
}