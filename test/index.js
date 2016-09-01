var should = require('chai').should(),
    alphanum = require('../index'),
    toAlpha = alphanum.toAlpha,
    toNumeric = alphanum.toNumeric,
    replaceAll = alphanum.replaceAll;

describe('#toAlpha single replacements', function() {

  it('0 should equal G', function(){
    toAlpha(0).should.equal('G');
  });

  it('1 should equal h', function(){
    toAlpha(1).should.equal('h');
  });

  it('2 should equal r', function(){
    toAlpha(2).should.equal('r');
  });

  it('3 should equal Q', function(){
    toAlpha(3).should.equal('Q');
  });

  it('4 should equal W', function(){
    toAlpha(4).should.equal('W');
  });

  it('5 should equal z', function(){
    toAlpha(5).should.equal('z');
  });

  it('6 should equal X', function(){
    toAlpha(6).should.equal('X');
  });

  it('7 should equal a', function(){
    toAlpha(7).should.equal('a');
  });

  it('8 should equal b', function(){
    toAlpha(8).should.equal('b');
  });

  it('9 should equal t', function(){
    toAlpha(9).should.equal('t');
  });

  it('00 should equal T', function(){
    toAlpha('00').should.equal('T');
  });

  it('11 should equal v', function(){
    toAlpha(11).should.equal('v');
  });

  it('22 should equal j', function(){
    toAlpha(22).should.equal('j');
  });

  it('33 should equal C', function(){
    toAlpha(33).should.equal('C');
  });

  it('44 should equal I', function(){
    toAlpha(44).should.equal('I');
  });

  it('55 should equal d', function(){
    toAlpha(55).should.equal('d');
  });

  it('66 should equal S', function(){
    toAlpha(66).should.equal('S');
  });

  it('77 should equal l', function(){
    toAlpha(77).should.equal('l');
  });

  it('88 should equal L', function(){
    toAlpha(88).should.equal('L');
  });

  it('99 should equal F', function(){
    toAlpha(99).should.equal('F');
  });

  it('01 should equal q', function(){
    toAlpha('01').should.equal('q');
  });

  it('02 should equal V', function(){
    toAlpha('02').should.equal('V');
  });

  it('03 should equal u', function(){
    toAlpha('03').should.equal('u');
  });

  it('04 should equal R', function(){
    toAlpha('04').should.equal('R');
  });

  it('05 should equal m', function(){
    toAlpha('05').should.equal('m');
  });

  it('06 should equal M', function(){
    toAlpha('06').should.equal('M');
  });

  it('07 should equal f', function(){
    toAlpha('07').should.equal('f');
  });

  it('08 should equal w', function(){
    toAlpha('08').should.equal('w');
  });

  it('09 should equal n', function(){
    toAlpha('09').should.equal('n');
  });

  it('21 should equal A', function(){
    toAlpha(21).should.equal('A');
  });

  it('20 should equal y', function(){
    toAlpha(20).should.equal('y');
  });

  it('23 should equal o', function(){
    toAlpha(23).should.equal('o');
  });

  it('24 should equal O', function(){
    toAlpha(24).should.equal('O');
  });

  it('25 should equal N', function(){
    toAlpha(25).should.equal('N');
  });

  it('26 should equal B', function(){
    toAlpha(26).should.equal('B');
  });

  it('27 should equal E', function(){
    toAlpha(27).should.equal('E');
  });

  it('28 should equal x', function(){
    toAlpha(28).should.equal('x');
  });

  it('29 should equal G', function(){
    toAlpha(29).should.equal('D');
  });

  it('89 should equal s', function(){
    toAlpha(89).should.equal('s');
  });

  it('98 should equal K', function(){
    toAlpha(98).should.equal('K');
  });

  it('97 should equal P', function(){
    toAlpha(97).should.equal('P');
  });

  it('96 should equal c', function(){
    toAlpha(96).should.equal('c');
  });

  it('95 should equal J', function(){
    toAlpha(95).should.equal('J');
  });

  it('94 should equal i', function(){
    toAlpha(94).should.equal('i');
  });

  it('93 should equal p', function(){
    toAlpha(93).should.equal('p');
  });

  it('92 should equal g', function(){
    toAlpha(92).should.equal('g');
  });

  it('91 should equal Y', function(){
    toAlpha(91).should.equal('Y');
  });

  it('90 should equal e', function(){
    toAlpha(90).should.equal('e');
  });

  it('111 should equal H', function(){
    toAlpha(111).should.equal('H');
  });

  it('000 should equal Z', function(){
    toAlpha('000').should.equal('Z');
  });

  it('1111 should equal k', function(){
    toAlpha(1111).should.equal('k');
  });

  it('0000 should equal U', function(){
    toAlpha('0000').should.equal('U');
  });
});

describe('#toAlpha combination replacements', function() {

  it('28205 should equal xyz', function(){
    toAlpha(28205).should.equal('xyz');
  });
  
  it('11111 should equal kh', function(){
    toAlpha(11111).should.equal('kh');
  });

  it('2926 should equal rgX', function(){
    toAlpha(2926).should.equal('rgX');
  });

  it('11121314 should equal HAQhW', function(){
    toAlpha(11121314).should.equal('HAQhW');
  });

});


describe('#toNumeric single replacements', function() {

  it('G should equal 0', function(){
    toNumeric('G').should.equal(0);
  });

  it('h should equal 1', function(){
    toNumeric('h').should.equal(1);
  });

  it('r should equal 2', function(){
    toNumeric('r').should.equal(2);
  });

  it(' Qshould equal 3', function(){
    toNumeric('Q').should.equal(3);
  });

  it('W should equal 4', function(){
    toNumeric('W').should.equal(4);
  });

  it('z should equal 5', function(){
    toNumeric('z').should.equal(5);
  });

  it('X should equal 6', function(){
    toNumeric('X').should.equal(6);
  });

  it('a should equal 7', function(){
    toNumeric('a').should.equal(7);
  });

  it('b should equal 8', function(){
    toNumeric('b').should.equal(8);
  });

  it('t should equal 9', function(){
    toNumeric('t').should.equal(9);
  });

  it('T should equal 00', function(){
    toNumeric('T').should.equal(0);
  });

  it('v should equal 11', function(){
    toNumeric('v').should.equal(11);
  });

  it('j should equal 22', function(){
    toNumeric('j').should.equal(22);
  });

  it('C should equal 33', function(){
    toNumeric('C').should.equal(33);
  });

  it('I should equal 44', function(){
    toNumeric('I').should.equal(44);
  });

  it('d should equal 55', function(){
    toNumeric('d').should.equal(55);
  });

  it('S should equal 66', function(){
    toNumeric('S').should.equal(66);
  });

  it('l should equal 77', function(){
    toNumeric('l').should.equal(77);
  });

  it('L should equal 88', function(){
    toNumeric('L').should.equal(88);
  });

  it('F should equal 99', function(){
    toNumeric('F').should.equal(99);
  });

  it('q should equal 01', function(){
    toNumeric('q').should.equal(1);
  });

  it('V should equal 02', function(){
    toNumeric('V').should.equal(2);
  });

  it('u should equal 03', function(){
    toNumeric('u').should.equal(3);
  });

  it('R should equal 04', function(){
    toNumeric('R').should.equal(4);
  });

  it('m should equal 05', function(){
    toNumeric('m').should.equal(5);
  });

  it('M should equal 06', function(){
    toNumeric('M').should.equal(6);
  });

  it('f should equal 07', function(){
    toNumeric('f').should.equal(7);
  });

  it('w should equal 08', function(){
    toNumeric('w').should.equal(8);
  });

  it('n should equal 09', function(){
    toNumeric('n').should.equal(9);
  });

  it('A should equal 21', function(){
    toNumeric('A').should.equal(21);
  });

  it('y should equal 20', function(){
    toNumeric('y').should.equal(20);
  });

  it('o should equal 23', function(){
    toNumeric('o').should.equal(23);
  });

  it('O should equal 24', function(){
    toNumeric('O').should.equal(24);
  });

  it('N should equal 25', function(){
    toNumeric('N').should.equal(25);
  });

  it('B should equal 26', function(){
    toNumeric('B').should.equal(26);
  });

  it('E should equal 27', function(){
    toNumeric('E').should.equal(27);
  });

  it('x should equal 28', function(){
    toNumeric('x').should.equal(28);
  });

  it('G should equal 29', function(){
    toNumeric('D').should.equal(29);
  });

  it('s should equal 89', function(){
    toNumeric('s').should.equal(89);
  });

  it('K should equal 98', function(){
    toNumeric('K').should.equal(98);
  });

  it('P should equal 97', function(){
    toNumeric('P').should.equal(97);
  });

  it('c should equal 96', function(){
    toNumeric('c').should.equal(96);
  });

  it('J should equal 95', function(){
    toNumeric('J').should.equal(95);
  });

  it('i should equal 94', function(){
    toNumeric('i').should.equal(94);
  });

  it('p should equal 93', function(){
    toNumeric('p').should.equal(93);
  });

  it('g should equal 92', function(){
    toNumeric('g').should.equal(92);
  });

  it('Y should equal 91', function(){
    toNumeric('Y').should.equal(91);
  });

  it('e should equal 90', function(){
    toNumeric('e').should.equal(90);
  });

  it('H should equal 111', function(){
    toNumeric('H').should.equal(111);
  });

  it('Z should equal 000 (0 as single)', function(){
    toNumeric('Z').should.equal(0);
  });

  it('k should equal 1111', function(){
    toNumeric('k').should.equal(1111);
  });

  it('U should equal 0000', function(){
    toNumeric('U').should.equal(0);
  });
});

describe('#toNumeric combination replacements', function() {

  it('xyz should equal 28205', function(){
    toNumeric('xyz').should.equal(28205);
  });
  
  it('kh should equal 11111', function(){
    toNumeric('kh').should.equal(11111);
  });

  it('rgX should equal 2926', function(){
    toNumeric('rgX').should.equal(2926);
  });

  it('HAQhW should equal 11121314', function(){
    toNumeric('HAQhW').should.equal(11121314);
  });
  
});

describe('#toNumeric preceeding zero tests', function() {

  it('hU should equal 10000', function(){
    toNumeric('hU').should.equal(10000);
  });
  
  it('hZ should equal 1000', function(){
    toNumeric('hZ').should.equal(1000);
  });

  it('hT should equal 100', function(){
    toNumeric('hT').should.equal(100);
  });

  it('hu should equal 103', function(){
    toNumeric('hu').should.equal(103);
  });
  
});


describe('#replaceAll helper function tests', function() {

  it('x should equal xyz', function(){
    replaceAll('x','x','xyz').should.equal('xyz');
  });
  
  it('x should equal xyzxxyz', function(){
    replaceAll('x','','xyz').should.equal('xyzxxyz');
  });

  it('aA should equal bb', function(){
    replaceAll('aA','a','b', true).should.equal('bb');
  });

  it('Hello??? should equal Hello!!!', function(){
    replaceAll('Hello???','?','!').should.equal('Hello!!!');
  });

  it('x should equal $$', function(){
    replaceAll('x','x','$$').should.equal('$$');
  });

  it('x should equal .', function(){
    replaceAll('x','x','.').should.equal('.');
  });

  it('... should equal .', function(){
    replaceAll('...','...','.').should.equal('.');
  });

  it('\\ should equal /', function(){
    replaceAll("\\","\\","/").should.equal('/');
  });

  it("It`s should equal It's", function(){
    replaceAll("It`s","`","'").should.equal("It's");
  });

});