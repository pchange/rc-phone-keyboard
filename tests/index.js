import expect from 'expect.js';
import React from 'react';
import { findDOMNode, render } from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
import $ from 'jquery';
import async from 'async';

import PhoneKeyboard, {
  formatPhone,
} from '../index';

import '../assets/index.less';

const timeout = (ms) => {
  return (done) => {
    setTimeout(done, ms);
  };
};

const expectPopupToHaveContent = (component, content) => {
  const prefixCls = component.props.prefixCls;
  const componentDomNode = findDOMNode(component);
  expect($(componentDomNode).find(`.${prefixCls}-result-value`).html().trim()).to.be(content);
};

const verifyContent = (component, content, done) => {
  async.series([timeout(20), (next) => {
    expectPopupToHaveContent(component, content);
    next();
  }, timeout(20), (next) => {
    next();
  }], done);
};

describe('rc-phone-keyboard format value method', () => {
  it('init 13800138000', (done) => {
    expect(formatPhone(13800138000)).to.be('138-0013-8000');
    done();
  });
  it('init 00000000000', (done) => {
    expect(formatPhone('00000000000')).to.be('000-0000-0000');
    done();
  });
  it('init 00000300000', (done) => {
    expect(formatPhone('00000300000')).to.be('000-0030-0000');
    done();
  });
});
describe('rc-phone-keyboard', () => {
  let div;
  before(() => {
    timeout(40000);
    div = document.createElement('div');
    div.style.margin = '100px';
    document.body.insertBefore(div, document.body.firstChild);
  });

  // afterEach(() => {
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  describe('check value and on change props', () => {
    it('init', (done) => {
      const numberKeyboard = render(<PhoneKeyboard key="value_test_1" className="test-phone-keyboard" />, div);
      verifyContent(numberKeyboard, '000-0000-0000', done);
    });

    it('props value', (done) => {
      const value = `${parseInt(Math.random() * 10000000000, 10)}`;
      const valueFormat = formatPhone(value);
      const numberKeyboard = render(<PhoneKeyboard key="value_test_2" value={value} />, div);
      verifyContent(numberKeyboard, valueFormat, done);
    });

    it('props onChange', (done) => {
      const testClick = () => {
        let countValue = parseInt(Math.random() * 10000, 10);
        let pastValue = formatPhone(countValue);
        const pastOnChange = (value) => {
          pastValue = value;
        };
        const numberKeyboard = render(<PhoneKeyboard key="value_test_3" onChange={pastOnChange} value={pastValue} />, div);
        const componentDomNode = findDOMNode(numberKeyboard);
        for (let clickTime = 8; clickTime -= 1;) {
          const row = parseInt(Math.random() * 4, 10);
          const col = parseInt(Math.random() * 3, 10);
          const tdElem = $(componentDomNode)
            .find('tr')
            .eq(row)
            .find('td')
            .eq(col);
          if (4 === row || 3 === col) {
            // 超出了键盘，不管
          }
          else {
            Simulate.click(findDOMNode(tdElem[0]));
            if (3 === row && 2 === col) {
              countValue = `${countValue}`.substring(0, `${countValue}`.length - 1);
            }
            else if (3 === row && 1 === col) {
              countValue = `${countValue}0`.substring(0, 11);
            }
            else if (3 === row && 0 === col) {
              // 这个没绑定点击动作。
            }
            else {
              const value = ((row * 3) + (col + 1)) % 10;
              countValue = `${countValue}${value}`.substring(0, 11);
            }
            expect(formatPhone(countValue)).to.be(pastValue);
          }
        }
      };
      for (let i = 30; i -= 1;) {
        testClick();
      }
      done();
    });
  });
});
