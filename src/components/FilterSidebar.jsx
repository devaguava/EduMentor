import React from 'react';

const FilterSidebar = ({ filter, setFilter }) => {
  return (
    <div className="filter-sidebar">
      <h2>Filter</h2>
      <div className="category">
        <label>Kategori</label>
        <select value={filter.category} onChange={(e) => setFilter({ ...filter, category: e.target.value })}>
          <option value="">Semua</option>
          <option value="Pemrograman">Pemrograman</option>
          <option value="Matematika">Matematika</option>
          <option value="Latihan">Latihan</option>
        </select>
      </div>
      <div className="price-range">
        <label>Harga Minimum</label>
        <input
          type="number"
          value={filter.priceRange.min}
          onChange={(e) => setFilter({ ...filter, priceRange: { ...filter.priceRange, min: e.target.value } })}
        />
        <label>Harga Maksimum</label>
        <input
          type="number"
          value={filter.priceRange.max}
          onChange={(e) => setFilter({ ...filter, priceRange: { ...filter.priceRange, max: e.target.value } })}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
