// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter } from '../../modals/base/example';
import { CheckboxAddButton } from '../../checkbox-button/base/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../../combobox/base/example';
import { Th } from '../../data-tables/advanced/example';
import { PillContainer } from '../../pills/base/example';
import { ListboxPill } from '../../pills/listbox-of-pill-options/example';
import classNames from 'classnames';
import _ from 'lodash';

/* -----------------------------------------------------------------------------
    Variables and Objects
----------------------------------------------------------------------------- */

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';
const columns = ['Name', 'Product Code', 'List Price', 'Product Family'];
const rows = [{
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}, {
  'name': 'Analytics',
  'productCode': 'ANTLY',
  'listPrice': '5000.00',
  'productFamily': 'Analytics Product'
}];

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </ListboxItem>
  </Listbox>;

let ProductListHeader = props =>
  <div className="slds-p-vertical--x-small slds-p-horizontal--large slds-shrink-none slds-theme--shade">
    <ComboboxContainer
      autocomplete={true}
      hideLabel={true}
      inputIcon="right"
      inputIconRightSymbol="search"
      listbox={<ListboxDropdown />}
    />
    { props.selectedFilters ? props.selectedFilters : null }
    <div className="slds-text-title slds-m-top--x-small" aria-live="polite">{ props.itemsSelected || '0' } Item(s) Selected</div>
  </div>;

let ProductList = props =>
  <div className="slds-scrollable slds-grow">
    <table role="grid" className="slds-table slds-table--fixed-layout slds-table--bordered slds-table--resizable-cols slds-no-row-hover slds-scrollable--none">
      <thead>
        <tr className="slds-line-height--reset">
          <th scope="col" style={{ width: '3.75rem' }} />
          { _.times(columns.length, i =>
            <Th key={i}
              columnName={columns[i]}
              aria-label={columns[i]}
            />
          )}
        </tr>
      </thead>
      <tbody>
        { props.children }
      </tbody>
    </table>
  </div>;

let RowData = props => {
  let checkboxLabel = 'Select item ' + props.index;

  return (
    <tr className={classNames('slds-hint-parent', props.className)} aria-selected={props.checked}>
      <td role="gridcell" tabIndex={(props.index === 1) ? '0' : '-1'} className="slds-text-align--right" style={{ width: '3.75rem' }}>
        <CheckboxAddButton label={checkboxLabel} checked={props.checked} tabIndex="-1" />
      </td>
      <th scope="row">
        <div className="slds-truncate" title={props.name}>{ props.name }</div>
      </th>
      <td role="gridcell">
        <div className="slds-truncate" title={props.productCode}>{ props.productCode }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={props.listPrice}>{ props.listPrice }</div>
      </td>
      <td role="gridcell">
        <div className="slds-truncate" title={props.productFamily}>{ props.productFamily }</div>
      </td>
    </tr>
  );
};

let FilteredItem = props =>
  <PillContainer className="slds-pill_container--bare">
    <Listbox horizonta={true}>
      <ListboxItem>
        <ListboxPill label="Analytics" tabIndex="0" />
      </ListboxItem>
    </Listbox>
  </PillContainer>;

let FilteredItems = props =>
  <PillContainer className="slds-pill_container--bare">
    <Listbox horizontal={true}>
      <ListboxItem>
        <ListboxPill label="Option A" tabIndex="0" />
      </ListboxItem>
      <ListboxItem>
        <ListboxPill label="Option B" />
      </ListboxItem>
    </Listbox>
  </PillContainer>;

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default (
  <div className="demo-only" style={{height: '640px'}}>
    <Modal className="slds-modal--large slds-list-builder" aria-labelledby="id-of-modalheader-h2">
      <ModalHeader>
        <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
        <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
      </ModalHeader>
      <ModalContent className="slds-grid slds-grow">
        <div className="slds-grid slds-grid--vertical">
          <ProductListHeader />
          <ProductList>
            { _.times(rows.length, i =>
              <RowData
                key={i}
                index={i + 1}
                name={rows[i].name}
                productCode={rows[i].productCode}
                listPrice={rows[i].listPrice}
                productFamily={rows[i].productFamily}
              />
            )}
          </ProductList>
        </div>
      </ModalContent>
      <ModalFooter>
        <button className="slds-button slds-button--neutral">Cancel</button>
        <button className="slds-button slds-button--brand">Next</button>
      </ModalFooter>
    </Modal>
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);

export let states = [
  {
    id: 'items-selected',
    label: 'Items selected',
    element:
    <div className="demo-only" style={{height: '640px'}}>
      <Modal className="slds-modal--large" aria-labelledby="id-of-modalheader-h2">
        <ModalHeader>
          <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
          <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
        </ModalHeader>
        <ModalContent className="slds-grid slds-nowrap">
          <div className="slds-col slds-grid slds-grid--vertical slds-nowrap">
            <ProductListHeader selectedFilters={<FilteredItem />} itemsSelected="1" />
            <ProductList>
              { _.times(rows.length, i =>
                <RowData
                  key={i}
                  index={i + 1}
                  checked={(i === 0) ? true : null}
                  name={rows[i].name}
                  productCode={rows[i].productCode}
                  listPrice={rows[i].listPrice}
                  productFamily={rows[i].productFamily}
                />
              )}
            </ProductList>
          </div>
        </ModalContent>
        <ModalFooter>
          <button className="slds-button slds-button--neutral">Cancel</button>
          <button className="slds-button slds-button--brand">Next</button>
        </ModalFooter>
      </Modal>
      <div className="slds-backdrop slds-backdrop--open" />
    </div>
  },
  {
    id: 'filtered',
    label: 'Filtered Results',
    element:
      <div className="demo-only" style={{height: '640px'}}>
        <Modal className="slds-modal--large" aria-labelledby="id-of-modalheader-h2">
          <ModalHeader>
            <h2 id="id-of-modalheader-h2" className="slds-text-heading--medium">Add Products</h2>
            <p className="slds-m-top--x-small">Pricebook: Salesforce Products</p>
          </ModalHeader>
          <ModalContent className="slds-grid slds-grow">
            <div className="slds-grid slds-grid--vertical">
              <ProductListHeader selectedFilters={<FilteredItems />} itemsSelected="2" />
              <ProductList>
                <RowData
                  index={1}
                  name={rows[0].name}
                  productCode={rows[0].productCode}
                  listPrice={rows[0].listPrice}
                  productFamily={rows[0].productFamily}
                />
              </ProductList>
            </div>
          </ModalContent>
          <ModalFooter>
            <button className="slds-button slds-button--neutral">Cancel</button>
            <button className="slds-button slds-button--brand">Next</button>
          </ModalFooter>
        </Modal>
        <div className="slds-backdrop slds-backdrop--open" />
      </div>
  }
];