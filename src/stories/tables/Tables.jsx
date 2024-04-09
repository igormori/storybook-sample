import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Buttons } from "../buttons/Buttons";
import './tables.css';

/**
 * Tables components documentation
 */


export function Tables({
    data,
    headers,
    actions,
}) {

    const rows = [
        {
            name: 'Frozen yoghurt', calories: 159, fat: 6.0, protein: 24, carbs: 4.0
        }
    ];

    return (
        <TableContainer component={Paper} className="custom-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className="table-header">
                    <TableRow>
                        {headers.map((item) => {
                            return <TableCell className="table-cell" key={item.name}>{item.label}</TableCell>
                        })}
                        {actions.map((item) => {
                            return <TableCell className="table-cell" key={item.name}>{item.label}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {headers.map((item) => {
                                return <TableCell className={`${item.limitText && item.limitText && 'limit-text'}`} key={item.name} component="th" scope="row">
                                    {row[item.name]}
                                </TableCell>
                            })}
                            {actions.map((item) => {
                                return <TableCell className="table-cell" key={item.name}>
                                    <Buttons
                                        label={item.label}
                                        value={index}
                                        onClick={item.onClick()}
                                        variant={item.variant}
                                        size="small"
                                    />
                                </TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
Tables.propTypes = {
    /**
     * Enter the table data
     */
    data: PropTypes.arrayOf(PropTypes.object),
    /**
     * Enter the table headers
     */
    headers: PropTypes.arrayOf(PropTypes.object),
    /**
     * Enter the table actions
     */
    actions: PropTypes.arrayOf(PropTypes.object),

};

Tables.defaultProps = {
    data: [
        {
            id: 'id',
            contactName: 'Olive Tree',
            phoneNumber: '+1 (555) 555 555',
            companyName: 'Idea Theorem',
            domainUrl: 'https://www.ideatheorem.com/'
        },
    ],
    headers: [
        {
            name: 'id',
            label: 'ID',
        },
        {
            name: 'contactName',
            label: 'Contact Name',
        },
        {
            name: 'phoneNumber',
            label: 'Phone Number',
        },
        {
            name: 'companyName',
            label: 'Company name',
        },
        {
            name: 'domainUrl',
            label: 'Domain URL',
        }
    ],
    actions: [
        {
            name: 'edit',
            label: 'Edit',
            variant: 'primary',
            onClick: function () {
                console.log('action')
            },
        }
    ]
};
