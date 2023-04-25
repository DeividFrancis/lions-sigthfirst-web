import { HTMLAttributes, TableHTMLAttributes, ThHTMLAttributes } from "react";

function Root({ className, ...rest }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className={`w-full text-sm text-left text-gray-500 dark:text-gray-400 ${className}`}
      {...rest}
    />
  );
}

function Head({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ${className}`}
      {...rest}
    />
  );
}

function Row({ ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr {...rest} />;
}

function HeaderCell({
  className,
  ...rest
}: ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return <th scope="col" className={`px-6 py-3 ${className}`} {...rest} />;
}

function Body({ ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...rest} />;
}

export const Table = Object.assign(Root, { Head, Row, HeaderCell, Body });
