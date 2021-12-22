import React, { Component } from 'react'

export default class ListOfData extends Component {
    state = {
        records: [{
            name: 'sunil',
            id: 1,
            salary: 1000
        }, {
            name: 'anil',
            id: 2,
            salary: 3000
        }, {
            name: 'banu',
            id: 3,
            salary: 2000
        }]
    }

    updateRecordHandler = (id, newValue, propName) => {
        const found = this.state.records.find(p => p.id === id)
        const index = this.state.records.findIndex(p => p.id === id)
        const copyFound = { ...found }
        copyFound[propName] = newValue

        const copyRecords = [...this.state.records]
        copyRecords[index] = copyFound

        this.setState({
            records: copyRecords
        })
    }
    render() {
        console.log(this.state)
        console.log('LOD rendered')
        const listOfRows = this.state.records.map(
            (person, i) => {
                return (
                    <tr key={person.id}>
                        <td>
                            <input type='text' value={person.name} onChange={
                                (e) => {
                                    this.updateRecordHandler(person.id, e.target.value, 'name')
                                }
                            } />
                        </td>
                        <td>{person.id}</td>
                        <td>
                            <input type='text' value={person.salary} onChange={
                                (e) => {
                                    const sal = e.target.value
                                    if (sal !== '') {
                                        this.updateRecordHandler(person.id, parseInt(sal), 'salary')
                                    }
                                }
                            } />
                        </td>
                    </tr>
                )
            }
        )
        console.log(listOfRows)
        return (
            <div>
                <button onClick={
                    () => {
                        const copy = [...this.state.records]
                        copy.sort(function (p1, p2) {
                            return p1.salary - p2.salary
                        })
                        this.setState({
                            records: copy
                        })
                    }
                }>Sort By Salary</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfRows
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
