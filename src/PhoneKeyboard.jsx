import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhoneKeyboard extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'rc-phone-keyboard',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: this.formatPhone(nextProps.value),
      });
    }
  }

  formatPhone = (value) => {
    const valueString = `${value}`;
    const part1 = valueString.match(/^(\d{1,3})/);
    const part2 = valueString.match(/^\d{3}(\d{1,4})/);
    const part3 = valueString.match(/^\d{7}(\d{1,4})/);
    let formatValue = '';
    if (part1) {
      formatValue = part1[1];
      if (part2) {
        formatValue = `${formatValue}-${part2[1]}`;
        if (part3) {
          formatValue = `${formatValue}-${part3[1]}`;
        }
      }
    }
    return formatValue;
  }

  onDelete = () => {
    const value = `${this.state.value || ''}`.replace(/[^\d]*/g, '');
    const newValue = value.substring(0, value.length - 1);
    this.onChange(newValue);
  }

  onInput = (inputValue) => {
    const value = this.state.value;
    const newValue = `${value}${inputValue}`;
    const numberValue = newValue.replace(/[^\d]*/g, '').substring(0, 11);
    this.onChange(numberValue);
  }

  onChange = (value) => {
    const formatValue = this.formatPhone(value || '');
    this.setState({
      value: formatValue,
    });
    const { onChange } = this.props;
    if ('function' === typeof onChange) {
      onChange(formatValue);
    }
  }

  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    let className = props.prefixCls;
    if (props.className) {
      className += ` ${props.className}`;
    }

    let resultClassName = `${prefixCls}-result-value`;
    if (!this.state.value) {
      resultClassName = `${resultClassName} ${prefixCls}-result-value-shadow`
    }
    return (
      <div className={className}>
        <div className={`${prefixCls}-result`}>
          <div className={`${prefixCls}-result-icon`}>
            <div className={`${prefixCls}-keyboard-phone-svg`}>
              <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M829.440327 71.14127c0 294.624181 0 589.249385 0 883.873566-0.381693 2.991124-0.845251 5.973038-1.130753 8.973372-1.487887 15.653515-6.522554 29.77821-18.141172 40.866756-14.597463 13.931291-32.576953 19.098987-52.240805 19.105127-163.274644 0.056282-326.548264 0.041956-489.822908-0.010233-5.732561-0.002047-11.516288-0.242524-17.188474-1.019213-26.943652-3.687996-45.072545-19.837814-50.735521-46.340421-2.036379-9.534144-2.323928-19.580964-2.325975-29.393447-0.047072-287.211351 0.035816-574.423725 0.148379-861.635075 0.00307-7.712659 0.143263-15.468296 0.946558-23.127743 1.597381-15.20633 6.925736-28.944216 18.043958-39.871079 14.953573-14.697747 33.498952-20.351514 53.947679-20.3597 161.118538-0.066515 322.236052-0.044002 483.356636-0.001023 5.196349 0.001023 10.426467 0.246617 15.584953 0.854461 29.665647 3.497661 50.316989 22.543436 56.394405 51.855018C827.397808 60.307527 828.388369 65.73105 829.440327 71.14127zM265.469676 812.481585c164.981519 0 329.625346 0 494.565932 0 0-234.988965 0-469.660706 0-704.585203-165.007101 0-329.653999 0-494.565932 0C265.469676 342.888418 265.469676 577.60109 265.469676 812.481585zM442.732915 37.401842c0 11.991102 0 23.382547 0 34.778084 46.827515 0 93.245707 0 139.925866 0 0-11.70867 0-23.088858 0-34.778084C535.893688 37.401842 489.469356 37.401842 442.732915 37.401842zM477.573421 918.442896c0.034792 19.431561 15.916505 35.406394 35.184337 35.388998 19.142989-0.017396 35.308157-16.263405 35.279504-35.45449-0.029676-19.190061-16.250102-35.441187-35.340903-35.406394C493.452064 883.006825 477.538629 899.077849 477.573421 918.442896zM407.286612 54.912657c0.029676-9.792017-7.479345-17.47807-17.247826-17.655102-9.975189-0.180102-17.854647 7.55814-17.873066 17.552771-0.017396 9.767458 7.55814 17.530258 17.228383 17.654079C399.391804 72.593342 407.255912 64.878636 407.286612 54.912657z" />
              </svg>
            </div>
          </div>
          <div className={`${prefixCls}-result-text`}>
            <div className={resultClassName}>
              { !this.state.value ? '000-0000-0000' : this.state.value }
            </div>
          </div>
        </div>
        <div className={`${prefixCls}-separate`} />
        <div className={`${prefixCls}-keyboard`}>
          <table className={`${prefixCls}-table`}>
            <tbody>
              {
                [0, 1, 2, 3].map((row) => {
                  return (<tr className={`${prefixCls}-keyboard-row`} key={`row_${row}`}>
                    {
                      [0, 1, 2].map((col) => {
                        const value = ((row * 3) + col + 1) % 10;
                        if (3 === row && 2 === col) {
                          return (<td className={`${prefixCls}-keyboard-col ${prefixCls}-keyboard-delete-col`} onClick={this.onDelete} key={`row_${row}_col_${col}`}>
                            <div className={`${prefixCls}-keyboard-col-circle`}>
                              <div className={`${prefixCls}-keyboard-delete-svg`}>
                                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <path d="M641.536 189.781333V64c0-35.157333-23.893333-64-56.490667-64H448.597333c-32.426667 0-66.048 28.842667-66.048 64v125.781333H179.2c7.850667 0-51.2 12.885333-51.2 66.218667 0 35.157333 26.624 64 59.050667 64h649.898666C869.376 320 896 291.157333 896 256c0-53.333333-59.050667-66.218667-59.050667-66.218667h-195.413333zM448 192V128c0-44.544 28.416-64 64-64 36.437333 0 64 19.626667 64 64v64h-128zM320 1024h384c70.4 0 128-57.6 128-128v-512H192v512c0 70.4 57.6 128 128 128z m323.754667-483.584c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.453334 28.501334-14.421333 0-26.282667-12.8-26.282666-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.453334-28.416 14.421333 0 26.282667 12.8 26.282666 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z" />
                                </svg>
                              </div>
                            </div>
                          </td>);
                        }
                        else if (3 === row && 1 === col) {
                          return (<td className={`${prefixCls}-keyboard-col`} key={`row_${row}_col_${col}`} onClick={this.onInput.bind(this, 0)}>
                            <div className={`${prefixCls}-keyboard-col-circle`}>0</div>
                          </td>);
                        }
                        else if (3 === row && 0 === col) {
                          return (<td className={`${prefixCls}-keyboard-col`} key={`row_${row}_col_${col}`}>
                            <div className={`${prefixCls}-keyboard-col-circle`} />
                          </td>);
                        }
                        else {
                          return (<td className={`${prefixCls}-keyboard-col`} key={`row_${row}_col_${col}`} onClick={this.onInput.bind(this, value)}>
                            <div className={`${prefixCls}-keyboard-col-circle`}>{ value }</div>
                          </td>);
                        }
                      })
                    }
                  </tr>);
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PhoneKeyboard;
