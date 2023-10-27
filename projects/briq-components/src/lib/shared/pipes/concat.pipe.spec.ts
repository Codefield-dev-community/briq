import { ConcatPipe } from './concat.pipe';

describe('ConcatPipe', () => {
  let pipe: ConcatPipe;

  beforeEach(() => {
    pipe = new ConcatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should concatenate an array of strings', () => {
    const strings = ['Accountancy', 'Ambulancechauffeur', 'Schilder'];

    expect(pipe.transform(strings)).toEqual('Accountancy, Ambulancechauffeur en Schilder');
  });

  it('should concatenate an array of strings with semicolon', () => {
    const strings = ['Accountancy', 'Ambulancechauffeur', 'Schilder'];

    expect(pipe.transform(strings, ': ')).toEqual('Accountancy: Ambulancechauffeur en Schilder');
  });

  it('should concatenate an array of strings with different ending glue word', () => {
    const strings = ['Accountancy', 'Ambulancechauffeur', 'Schilder'];

    expect(pipe.transform(strings, ': ', 'of')).toEqual('Accountancy: Ambulancechauffeur of Schilder');
  });
});
