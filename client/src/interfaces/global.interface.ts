import { ChangeEvent, MouseEvent } from "react";

export enum Method {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Delete = 'delete'
}

export type HandleClick = (event: MouseEvent<HTMLButtonElement>) => void
export type HandleChangeText = (event: ChangeEvent<HTMLInputElement>) => void
export type HandleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => void
export type handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => void
export type HandleChangeTextSelect = (data: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
export type handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => void

// BREADCRUMB
export enum BreadcrumbType {
  Category = 'category',
  Product = 'product',
}

export interface Data {
  name: string;
  _id: string;
  name_id: 'category' | 'product' | 'home'
}

export type MapEntityBreadcrumb = {

  [BreadcrumbType.Category]: {
    entity: BreadcrumbType.Category;
    data: Data[]
  };

  [BreadcrumbType.Product]: {
    entity: BreadcrumbType.Product;
    data: Data[]
  };

};