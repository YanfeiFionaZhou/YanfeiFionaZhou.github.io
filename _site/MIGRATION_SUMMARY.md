# Website Migration Summary: Deqing Fu → Yanfei Zhou

This document summarizes all changes made to convert the website from Deqing Fu's information to Yanfei Zhou's information.

## Changes Made

### 1. Configuration (_config.yml)
- **Name**: Changed from "Deqing Fu" to "Yanfei Zhou"
- **Email**: Changed from "deqingfu@usc.edu" to "yanfei.zhou@marshall.usc.edu"
- **URL**: Changed from "https://deqingfu.github.io" to "https://yanfeizhou.github.io"
- **Description**: Updated to reflect Yanfei's position in DSO at USC Marshall
- **Keywords**: Changed from "nlp, transformers, in-context-learning, multimodal-learning" to "conformal-inference, uncertainty-quantification, statistics"
- **GitHub**: Changed from "DeqingFu" to "YanfeiFionaZhou"
- **LinkedIn**: Added "yanfei-zhou-25547a11a"
- **X/Twitter**: Removed (was "DeqingFu")
- **Google Scholar**: Cleared (to be added when found)
- **Semantic Scholar**: Cleared
- **Scholar settings**: Changed last_name from [Fu] to [Zhou], first_name from [Deqing, D.] to [Yanfei, Y.]

### 2. About Page (_pages/about.md)
- **Email display**: Changed to "yanfei.zhou[at]marshall[dot]usc[dot]edu"
- **CV link**: Changed to "/assets/pdf/curriculum_vitae_yanfei.pdf"
- **Social links**: Updated to Yanfei's profiles (removed Semantic Scholar and X, kept Google Scholar generic link, added LinkedIn)
- **Biography**: Completely rewritten with Yanfei's information:
  - Third-year Ph.D. student in DSO at USC Marshall
  - Working with Prof. Matteo Sesia
  - Research on Conformal Inference and Deep Learning
  - Educational background: M.S. from UChicago, B.S. from LSE
  - Work experience at CNA Insurance
- **Research interests**: Changed from LLM theory/NLP to Uncertainty Quantification and Conformal Inference
- **Publications section**: Replaced with Yanfei's 3 main papers

### 3. Publications Page (_pages/publications.md)
- **Google Scholar link**: Changed to generic "https://scholar.google.com" (to be updated with Yanfei's specific profile)

### 4. Bibliography (_bibliography/papers.bib)
- **Backup**: Original file backed up as "papers_deqing_backup.bib"
- **New content**: Created with Yanfei's 3 publications:
  1. Conformal Forecaster for Heterogeneous time Trajectories (2025, arXiv)
  2. Conformal inference is (almost) free for neural networks trained with early stopping (ICML 2023)
  3. Training Uncertainty-Aware Classifiers with Conformalized Deep Learning (NeurIPS 2022)

### 5. News Items (_news/)
- **Backup**: All Deqing's news items moved to "_news_backup/" folder
- **New content**: Created single welcome post (2025-02-01-website-launch.md)

### 6. CV Files (assets/pdf/)
- **Backup**: Deqing's CV backed up as "curriculum_vitae_deqing_backup.pdf"
- **Placeholder**: Created "curriculum_vitae_yanfei_placeholder.txt" with instructions

### 7. Data Files
- **_data/cv.yml**: Updated with Yanfei's education and experience:
  - Ph.D. at USC Marshall (2022-Present)
  - M.S. in Statistics from University of Chicago (2020)
  - B.S. from LSE (2019)
  - Data Scientist at CNA Insurance (2020-2021)
  - Research interests: Uncertainty Quantification, Conformal Inference, Machine Learning
  
- **_data/coauthors.yml**: Changed "fu" entry to "zhou" with Yanfei's information

## Action Items for Yanfei

1. **Replace Profile Picture**: Update the file at `assets/img/profile.jpg` with your photo

2. **Add CV**: Replace `assets/pdf/curriculum_vitae_yanfei_placeholder.txt` with your actual CV PDF named `curriculum_vitae_yanfei.pdf`

3. **Update Google Scholar Link**: Once you find your Google Scholar profile URL, update:
   - `_config.yml`: Add your scholar_userid
   - `_pages/about.md`: Update the Google Scholar link
   - `_pages/publications.md`: Update the Google Scholar link

4. **Add More Publications**: The bibliography file at `_bibliography/papers.bib` currently has 3 papers. You can add more publications by:
   - Finding your papers on Google Scholar
   - Exporting them as BibTeX
   - Adding them to the papers.bib file

5. **Add More News Items**: Create markdown files in the `_news/` folder to announce:
   - Paper acceptances
   - Conference presentations
   - Awards
   - Talks
   - Any other academic news

6. **Review and Test**: Build the site locally to make sure everything looks correct:
   ```bash
   bundle exec jekyll serve
   ```

7. **Update Repository Settings**: If you haven't already:
   - Change the GitHub repository name to match your username
   - Update GitHub Pages settings to deploy from the correct branch

## Files Backed Up

All original content has been preserved:
- `_bibliography/papers_deqing_backup.bib` - Deqing's publications
- `_news_backup/` - All of Deqing's news items
- `assets/pdf/curriculum_vitae_deqing_backup.pdf` - Deqing's CV

## Notes

- The site is configured to use Google Scholar for publications, which is more maintainable than manually updating the bibliography
- The website uses the al-folio Jekyll theme
- All personal information, social media links, and research content have been updated to reflect Yanfei's profile
- Chinese name updated: 傅德卿 → 周砚菲
