import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '.';
import useProductsStore from '../../store';

jest.mock('../../store');

describe('LandingPage', () => {
  beforeEach(() => {
    useProductsStore.mockImplementation(() => ({
      products: [
        { id: 1, name: 'Ale', brand: 'Brewery A', style: 'IPA', abv: '5%', price: '5', image: 'url-to-image', type: 'beer' },
        { id: 2, name: 'Lager', brand: 'Brewery B', style: 'Stout', abv: '6%', price: '6', image: 'url-to-image', type: 'beer' }
      ],
      fetchProducts: jest.fn()
    }));
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  });

  test('renders beers correctly', () => {
    expect(screen.getByText('Ale')).toBeInTheDocument();
    expect(screen.getByText('Lager')).toBeInTheDocument();
  });
  
  test('filters beers by brand using Controls input', async () => {
    const brandInput = screen.getByPlaceholderText('Search by brand');
    userEvent.type(brandInput, 'Brewery A');
    
    await waitFor(() => {
      expect(screen.getByText('Ale')).toBeInTheDocument();
      expect(screen.queryByText('Lager')).not.toBeInTheDocument();
    });
  });
});
