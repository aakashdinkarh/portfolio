# Release Notes - September 25, 2025

# Version - 2.0.0

## 🚀 Major Architecture Migration: Build System Implementation

### Overview

Migrated from raw HTML/CSS/JS serving to a modern build-based system with significant performance improvements and deployment optimizations.

### Key Changes

- **Build System**: Introduced comprehensive build process with minification and optimization
- **Deployment Flow**: Updated to use `dist/` folder with production-ready assets
- **GitHub Actions**: Restructured workflows for better CI/CD pipeline
- **Performance**: Achieved 86.7% reduction in requests and 27.6% reduction in transferred size

### Performance Improvements

| Metric            | Before  | After   | Improvement |
| ----------------- | ------- | ------- | ----------- |
| Requests          | 15      | 2       | -86.7%      |
| Transferred Size  | 18.5 kB | 13.4 kB | -27.6%      |
| Resources Size    | 66.5 kB | 56.3 kB | -15.3%      |
| Compression Ratio | 72.2%   | 76.2%   | +4.0 pp     |

### Workflow Changes

- **New**: `build-portfolio.yml` - Builds portfolio and stores artifacts in `remote-build` branch
- **Updated**: `deploy-projects.yml` (renamed from `static.yml`) - Enhanced deployment process
- **Unchanged**: `compare-branches.yml` - Maintained existing functionality

### Benefits

- 🚀 Faster page loads with 87% fewer requests
- 📦 Better compression efficiency (+4 percentage points)
- 🛠️ Cleaner deployment process serving only necessary files
- 🔧 Improved maintainability and scalability for future enhancements
- 📁 Clear separation of source code and build artifacts

# Release Notes - March 20, 2025

## 🎯 SEO Improvements

- Added structured data for Projects ItemList with Article type for rich results
- Implemented Profile Page structured data for better search engine visibility

## 🔗 Navigation Improvements

- Updated links to redirect to "Try it now" for title links
- Enhanced user navigation flow through project sections

## 🛠️ Technical Improvements

- [CI] Updated default value for argument and removed unnecessary logs
- [CI] Enhanced compare-branches workflow configuration

### Detailed Changes

1. SEO Enhancement (PR #24)

   - Added structured data implementation for project listings
   - Enhanced Profile Page with structured data
   - Improved search engine visibility through rich results

2. Navigation Updates

   - Modified title links to improve user experience
   - Streamlined navigation paths to project demos

3. CI/CD Improvements
   - Optimized workflow configurations
   - Cleaned up logging implementation
   - Updated branch comparison logic

### Commits

- c8e3f3a - Merge pull request #24 (SEO Enhancements)
- ac55509 - Projects ItemList structured data implementation
- 4d70df1 - Profile Page structured data
- ce9be76 - Update links for title redirections
- cc82c25 - Update default argument values and cleanup
- 046cd50 - Update compare-branches workflow
