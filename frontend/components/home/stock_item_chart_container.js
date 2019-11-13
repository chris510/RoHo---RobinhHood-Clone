import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StockItemChart from './stock_item_chart';
import { fetchStockIntradayData, fetch1YrHistoricalData } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  fetchStockIntradayData: symbol => dispatch(fetchStockIntradayData(symbol)),
  fetch1YrHistoricalData: symbol => dispatch(fetch1YrHistoricalData(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockItemChart);