import { filter_data } from "./data";

import { FilterContainer, Filter, Title, Items } from "./WikiFilter.style";

export default function WikiFilter({ filterRef }) {
    const handleCheck = (type, value) => {
        filterRef.current[type] = parseInt(value);
    };

    return (
        <FilterContainer>
            {filter_data.map((data) => (
                <Filter key={data.type}>
                    <Title>{data.title}</Title>
                    <Items>
                        {data.select.map((item) => (
                            <li key={item.value}>
                                <input
                                    onChange={() =>
                                        handleCheck(data.type, item.value)
                                    }
                                    type="checkbox"
                                    id={data.type + item.value}
                                    name={data.type}
                                    value={item.value}
                                />
                                <label htmlFor={data.type + item.value}>
                                    {item.label}
                                </label>
                            </li>
                        ))}
                    </Items>
                </Filter>
            ))}
        </FilterContainer>
    );
}
