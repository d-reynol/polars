use polars::prelude::*;

#[test]
fn test_to_list_logical() -> PolarsResult<()> {
    let ca = StringChunked::new("a".into(), &["2021-01-01", "2021-01-02", "2021-01-03"]);
    let out = ca.as_date(None, false)?.into_series();
    let out = out.implode().unwrap();
    assert_eq!(out.len(), 1);
    let s = format!("{:?}", out);
    // check if dtype is maintained all the way to formatting
    assert!(s.contains("[2021-01-01, 2021-01-02, 2021-01-03]"));

    let expl = out.explode(false).unwrap();
    assert_eq!(expl.dtype(), &DataType::Date);
    Ok(())
}
